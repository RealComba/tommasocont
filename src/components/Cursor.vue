<template>
  <div v-if="!isTouchDevice && isVisible" class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
    <!-- Center Dot (Sharp) -->
    <div
      class="fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-400 mix-blend-difference will-change-transform pointer-events-none"
      :style="{
        transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 2.2 : 1})`,
        transition: 'transform 0.15s ease-out',
      }"
    />

    <!-- Trailing Ring (Smooth Spring/Lerp) -->
    <div
      class="fixed top-0 left-0 w-9 h-9 rounded-full border border-cyan-400/40 mix-blend-screen will-change-transform pointer-events-none"
      :style="{
        transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        borderColor: isPointer ? 'rgba(56, 189, 248, 0.85)' : 'rgba(56, 189, 248, 0.35)',
        backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
      }"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const isTouchDevice = ref(false);
const isVisible = ref(false);
const isPointer = ref(false);

const mouse = reactive({ x: -100, y: -100 });
const dotPos = reactive({ x: -100, y: -100 });
const ringPos = reactive({ x: -100, y: -100 });

let rafId = null;

const onMouseMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  if (!isVisible.value) isVisible.value = true;

  const target = e.target;
  isPointer.value = Boolean(
    target && (
      target.closest('a') ||
      target.closest('button') ||
      target.closest('input') ||
      target.closest('[data-cursor="pointer"]') ||
      target.classList.contains('cursor-pointer')
    )
  );
};

const onMouseLeave = () => { isVisible.value = false; };
const onMouseEnter = () => { isVisible.value = true; };

const loop = () => {
  // Dot follows fast
  dotPos.x += (mouse.x - dotPos.x) * 0.45;
  dotPos.y += (mouse.y - dotPos.y) * 0.45;

  // Ring lags smoothly behind (Spring / Lerp)
  ringPos.x += (mouse.x - ringPos.x) * 0.15;
  ringPos.y += (mouse.y - ringPos.y) * 0.15;

  rafId = requestAnimationFrame(loop);
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice.value) return;

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(loop);
  }
});

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
  window.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseleave', onMouseLeave);
  document.removeEventListener('mouseenter', onMouseEnter);
});
</script>
