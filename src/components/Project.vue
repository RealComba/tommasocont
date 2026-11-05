<template>
  <div class="section-wrap">

    <div class="projects-heading" data-reveal><h2 class="display-title">{{ it ? 'Idee, messe' : 'Ideas, brought' }}<br><span class="muted">{{ it ? 'in pratica.' : 'to life.' }}</span></h2><p>{{ it ? 'Scegli un progetto. Esplora l’interfaccia, scopri lo stack e apri il codice.' : 'Pick a project. Explore the interface, discover the stack and open the code.' }}</p></div>
    <div class="project-explorer" data-reveal>
      <div class="project-index" role="tablist" :aria-label="it ? 'Scegli un progetto' : 'Choose a project'" aria-orientation="vertical">
        <button v-for="(project, i) in projects" :key="project.title" :id="`project-tab-${i}`" role="tab" :aria-selected="selected === i" aria-controls="project-panel" :tabindex="selected === i ? 0 : -1" @click="select(i)" @keydown="navigate($event, i)" :class="{ selected: selected === i }">
          <span>{{ it ? project.title : project.titleEn }}<small>{{ project.year }} / {{ project.technologies[0] }}</small></span><span aria-hidden="true">↗</span>
        </button>
      </div>
      <div id="project-panel" role="tabpanel" :aria-labelledby="`project-tab-${selected}`" tabindex="0" class="project-panel">
        <div ref="detail">
          <div class="project-preview"><img :src="current.image" :alt="`${it ? 'Anteprima' : 'Preview'} — ${it ? current.title : current.titleEn}`" width="1200" height="750" loading="lazy"></div>
          <div class="project-details"><p class="project-description">{{ it ? current.description : current.descriptionEn }}</p><ul class="tech-list" aria-label="Stack"><li v-for="tech in current.technologies" :key="tech">{{ tech }}</li></ul><div class="project-actions"><a v-if="current.liveUrl" :href="current.liveUrl" target="_blank" rel="noopener noreferrer" class="text-link">{{ it ? 'Apri il progetto' : 'Open project' }} ↗</a><a :href="current.githubUrl" target="_blank" rel="noopener noreferrer" class="text-link">{{ current.githubUrl === 'https://github.com/RealComba' ? (it ? 'Profilo GitHub' : 'GitHub profile') : (it ? 'Esplora il codice' : 'Explore the code') }} ↗</a></div></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref, computed, nextTick, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from '../i18n';
import { projects } from '../data/projects';
const { language } = useI18n();
const it = computed(() => language.value === 'it');
const selected = ref(0), detail = ref(null);
const current = computed(() => projects[selected.value]);
let animation;
async function select(index) {
  if (selected.value === index) return;
  animation?.revert();
  selected.value = index;
  await nextTick();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) animation = gsap.fromTo(detail.value, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, clearProps: 'all' });
}
function navigate(event, index) {
  const keys = { ArrowDown: (index + 1) % projects.length, ArrowUp: (index - 1 + projects.length) % projects.length, Home: 0, End: projects.length - 1 };
  if (!(event.key in keys)) return;
  event.preventDefault();
  select(keys[event.key]);
  document.getElementById(`project-tab-${keys[event.key]}`).focus();
}
onBeforeUnmount(() => animation?.revert());
</script>
