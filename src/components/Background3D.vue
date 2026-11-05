<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
    <canvas aria-hidden="true" ref="canvasRef" class="w-full h-full block"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const canvasRef = ref(null);
let renderer = null;
let scene = null;
let camera = null;
let animationFrameId = null;
let mediaQuery;
let sceneProgress = 0;

// Meshes & groups
let sceneGroup = null;
let icosahedron = null;
let torusKnot = null;
let octahedron = null;
let stars = null;
let pointerLight = null;
let pointerGlow = null;
let glowTexture = null;
let pointerEnergy = 0;
let lastPointerTime = 0;
const raycaster = new THREE.Raycaster();
const pointerPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.5);
const pointerNdc = new THREE.Vector2();
const pointerWorld = new THREE.Vector3();
const objectWorld = new THREE.Vector3();

// Target and current mouse positions for smooth parallax
const mouse = { targetX: 0, targetY: 0, x: 0, y: 0 };

const onMouseMove = (e) => {
  // Normalize mouse coordinates between -1 and 1
  mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  lastPointerTime = performance.now();
};

const onPointerLeave = () => { lastPointerTime = 0; };

const initThree = () => {
  if (!canvasRef.value) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x030712, 0.08);

  // Camera
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
  camera.position.z = 7;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const cyanLight = new THREE.DirectionalLight(0x06b6d4, 3);
  cyanLight.position.set(5, 5, 4);
  scene.add(cyanLight);

  const indigoLight = new THREE.PointLight(0x6366f1, 4, 15);
  indigoLight.position.set(-6, -4, 2);
  scene.add(indigoLight);

  const violetLight = new THREE.PointLight(0xa855f7, 3, 15);
  violetLight.position.set(4, -5, -2);
  scene.add(violetLight);

  // A soft light in world space follows the pointer, lighting nearby surfaces.
  pointerLight = new THREE.PointLight(0x8de0e6, 0, 8, 2);
  scene.add(pointerLight);
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 64;
  const ctx = glowCanvas.getContext('2d');
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(180,245,255,0.8)');
  gradient.addColorStop(0.18, 'rgba(100,220,245,0.35)');
  gradient.addColorStop(0.5, 'rgba(65,155,230,0.08)');
  gradient.addColorStop(1, 'rgba(65,155,230,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  glowTexture = new THREE.CanvasTexture(glowCanvas);
  pointerGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  pointerGlow.scale.set(1.6, 1.6, 1);
  scene.add(pointerGlow);

  // Group for mouse parallax
  sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // 1. Icosahedron (Floating Center-Right)
  const icoGeo = new THREE.IcosahedronGeometry(1.35, 1);
  const icoMat = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    roughness: 0.15,
    metalness: 0.85,
    wireframe: false,
    flatShading: true,
  });
  icosahedron = new THREE.Mesh(icoGeo, icoMat);
  icosahedron.position.set(2.8, 0.4, -0.5);
  sceneGroup.add(icosahedron);

  // 2. Torus Knot (Floating Top-Left)
  const torusGeo = new THREE.TorusKnotGeometry(0.85, 0.22, 100, 16);
  const torusMat = new THREE.MeshStandardMaterial({
    color: 0x6366f1,
    roughness: 0.3,
    metalness: 0.9,
    wireframe: true,
  });
  torusKnot = new THREE.Mesh(torusGeo, torusMat);
  torusKnot.position.set(-3.2, 1.8, -1.8);
  sceneGroup.add(torusKnot);

  // 3. Octahedron (Floating Bottom-Left)
  const octGeo = new THREE.OctahedronGeometry(1.1, 0);
  const octMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    roughness: 0.1,
    metalness: 0.95,
  });
  octahedron = new THREE.Mesh(octGeo, octMat);
  octahedron.position.set(-2.6, -2.1, -0.8);
  sceneGroup.add(octahedron);
  for (const mesh of [icosahedron, torusKnot, octahedron]) mesh.material.emissiveIntensity = 0;

  // 4. Starfield / Particles
  const starCount = 220;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starScales = new Float32Array(starCount);

  for (let i = 0; i < starCount * 3; i += 3) {
    starPositions[i] = (Math.random() - 0.5) * 20;
    starPositions[i + 1] = (Math.random() - 0.5) * 20;
    starPositions[i + 2] = (Math.random() - 0.5) * 15;
    starScales[i / 3] = Math.random() * 2 + 0.5;
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  
  const starMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.07,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
  });

  stars = new THREE.Points(starGeo, starMat);
  sceneGroup.add(stars);

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onPointerLeave);
  window.addEventListener('blur', onPointerLeave);
  window.addEventListener('resize', onResize);

  animate();
};

let clock = new THREE.Clock();

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  if (document.hidden) return;

  const elapsedTime = clock.getElapsedTime();

  // Smooth lerp mouse parallax
  mouse.x += (mouse.targetX - mouse.x) * 0.05;
  mouse.y += (mouse.targetY - mouse.y) * 0.05;

  if (sceneGroup) {
    // The scene gradually turns and recedes as the visitor enters the story.
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 2, 1), 1);
    sceneProgress += (progress - sceneProgress) * 0.035;
    sceneGroup.position.z = -sceneProgress * 2;
    sceneGroup.rotation.z = sceneProgress * 0.22;
    sceneGroup.rotation.y = mouse.x * 0.28 + sceneProgress * 0.6;
    sceneGroup.rotation.x = -mouse.y * 0.22;
  }

  // Floating & rotation animations
  if (icosahedron) {
    icosahedron.rotation.x = elapsedTime * 0.25;
    icosahedron.rotation.y = elapsedTime * 0.35;
    icosahedron.position.y = 0.4 + Math.sin(elapsedTime * 1.4) * 0.22;
  }

  if (torusKnot) {
    torusKnot.rotation.x = -elapsedTime * 0.3;
    torusKnot.rotation.y = elapsedTime * 0.4;
    torusKnot.position.y = 1.8 + Math.cos(elapsedTime * 1.1) * 0.25;
  }

  if (octahedron) {
    octahedron.rotation.y = elapsedTime * 0.35;
    octahedron.rotation.z = elapsedTime * 0.2;
    octahedron.position.y = -2.1 + Math.sin(elapsedTime * 1.6) * 0.2;
  }

  if (stars) {
    stars.rotation.y = elapsedTime * 0.02;
  }

  if (pointerLight && pointerGlow && camera) {
    const activity = lastPointerTime ? Math.max(0, 1 - (performance.now() - lastPointerTime) / 1600) : 0;
    pointerEnergy += (activity - pointerEnergy) * 0.07;
    pointerNdc.set(mouse.x, mouse.y);
    raycaster.setFromCamera(pointerNdc, camera);
    if (raycaster.ray.intersectPlane(pointerPlane, pointerWorld)) {
      pointerLight.position.copy(pointerWorld);
      pointerGlow.position.copy(pointerWorld);
    }
    pointerLight.intensity = pointerEnergy * 16;
    pointerGlow.material.opacity = pointerEnergy * 0.55;
    sceneGroup.updateMatrixWorld(true);
    for (const mesh of [icosahedron, torusKnot, octahedron]) {
      mesh.getWorldPosition(objectWorld);
      // Project onto the same plane to make hover proximity independent of depth.
      const depthScale = (camera.position.z - pointerWorld.z) / (camera.position.z - objectWorld.z);
      const dx = objectWorld.x * depthScale - pointerWorld.x;
      const dy = objectWorld.y * depthScale - pointerWorld.y;
      const proximity = Math.max(0, 1 - Math.hypot(dx, dy) / 2);
      mesh.material.emissive.setHex(mesh === torusKnot ? 0x6366f1 : 0x12b5da);
      mesh.material.emissiveIntensity += (proximity * pointerEnergy * 0.8 - mesh.material.emissiveIntensity) * 0.08;
    }
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

const onResize = () => {
  if (!camera || !renderer) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

const disposeScene = () => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
  window.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseleave', onPointerLeave);
  window.removeEventListener('blur', onPointerLeave);
  window.removeEventListener('resize', onResize);
  scene?.traverse(object => {
    object.geometry?.dispose();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach(material => material?.dispose());
  });
  glowTexture?.dispose();
  glowTexture = null;
  pointerLight = null;
  pointerGlow = null;
  pointerEnergy = 0;
  lastPointerTime = 0;
  renderer?.dispose();
  renderer = null;
  scene = null;
};
const updateScene = () => {
  if (mediaQuery.matches && !renderer) {
    try { clock = new THREE.Clock(); initThree(); }
    catch { disposeScene(); } // A missing WebGL context must not block the portfolio.
  } else if (!mediaQuery.matches && renderer) disposeScene();
};
onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
  mediaQuery.addEventListener('change', updateScene);
  updateScene();
});
onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateScene);
  disposeScene();
});
</script>
