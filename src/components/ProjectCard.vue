<template>
  <div
    class="project-card-wrapper w-full"
    style="perspective: 1000px"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div
      ref="cardRef"
      class="project-card relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl transition-all duration-200 ease-out group"
      :style="{
        transform: isHovered
          ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
      }"
    >
      <!-- Background Image with smooth zoom on hover -->
      <img
        :src="project.image"
        :alt="projectTitle"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      <!-- Dark Gradient Overlay for high readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 z-0"></div>

      <!-- Specular Glare / Dynamic Shine -->
      <div
        class="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        :style="{
          background: isHovered
            ? `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18), transparent 60%)`
            : 'none',
        }"
      />

      <!-- Top bar: Year + Links -->
      <div class="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <span class="text-xs font-mono font-medium tracking-wider px-3 py-1 rounded-full border border-white/10 bg-slate-950/70 text-cyan-300 backdrop-blur-md">
          {{ project.year || '2026' }}
        </span>

        <div class="flex items-center gap-2">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full border border-white/10 bg-slate-950/70 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all backdrop-blur-md"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
          </a>
          <a
            v-if="project.liveUrl || (project.githubUrl && project.linkText)"
            :href="project.liveUrl || project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-full border border-white/10 bg-slate-950/70 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-all backdrop-blur-md"
            title="Live Demo"
            aria-label="Live Demo"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>

      <!-- Bottom: Hover Reveal Info -->
      <div class="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end z-20 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
        <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
          {{ projectTitle }}
        </h3>

        <p class="text-xs sm:text-sm text-slate-300 mt-2 font-light line-clamp-2 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
          {{ projectDesc }}
        </p>

        <!-- Tech Stack Badges -->
        <div class="flex flex-wrap gap-1.5 mt-3.5">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-cyan-500/20 bg-cyan-950/40 text-cyan-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useI18n } from '../i18n';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
});

const { language } = useI18n();

const cardRef = ref(null);
const isHovered = ref(false);

const tilt = reactive({ rotateX: 0, rotateY: 0 });
const glare = reactive({ x: 50, y: 50 });

const projectTitle = computed(() => {
  return language.value === 'it' ? props.project.title : (props.project.titleEn || props.project.title);
});

const projectDesc = computed(() => {
  return language.value === 'it' ? props.project.description : (props.project.descriptionEn || props.project.description);
});

const onMouseMove = (e) => {
  if (!cardRef.value) return;
  isHovered.value = true;

  const rect = cardRef.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Normalized coordinates from center: -0.5 to 0.5
  const normX = (e.clientX - rect.left - width / 2) / width;
  const normY = (e.clientY - rect.top - height / 2) / height;

  // Tilt physics
  tilt.rotateY = normX * 16;
  tilt.rotateX = -normY * 16;

  // Glare position percentage
  glare.x = (normX + 0.5) * 100;
  glare.y = (normY + 0.5) * 100;
};

const onMouseLeave = () => {
  isHovered.value = false;
  tilt.rotateX = 0;
  tilt.rotateY = 0;
};
</script>

<style scoped>
.project-card {
  will-change: transform;
}
</style>
