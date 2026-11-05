<template>
  <div ref="root" class="section-wrap">

    <div class="profile-layout">
      <div data-reveal>
        <h2 class="display-title">{{ it ? 'Tutto parte' : 'It starts' }}<br><span class="muted">{{ it ? 'dalla curiosità.' : 'with curiosity.' }}</span></h2>
        <p class="intro-copy">{{ t('aboutMeDescription') }}</p>
        <a :href="CVFile" target="_blank" rel="noopener" class="text-link">{{ it ? 'Leggi il mio CV' : 'Read my CV' }} <span aria-hidden="true">↗</span></a>
      </div>
      <figure class="portrait" data-reveal><img :src="profileImg" alt="Tommaso Cont" loading="lazy" width="400" height="500"><figcaption>Tommaso Cont <span>{{ it ? 'Verona, Italia' : 'Verona, Italy' }}</span></figcaption></figure>
    </div>
    <div class="journey">
      <div class="journey-intro"><p class="eyebrow">{{ it ? 'Formazione' : 'Education' }}</p><h3>{{ it ? 'Il mio percorso nello sviluppo web.' : 'My path into web development.' }}</h3><div class="journey-progress" aria-hidden="true"><span /></div></div>
      <ol class="journey-steps">
        <li v-for="(step, i) in steps" :key="i" class="journey-step">
          <span class="step-number">0{{ i + 1 }}</span><div><p class="eyebrow">{{ step.period }}</p><h3>{{ step.title }}</h3><p>{{ step.copy }}</p><span v-if="i === 2" class="availability">{{ it ? 'Aperto a nuove opportunità' : 'Open to opportunities' }}</span></div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from '../i18n';
import CVFile from '../assets/Tommaso Cont CV.pdf';
import profileImg from '../assets/profile.jpeg';
const { language, t } = useI18n();
const it = computed(() => language.value === 'it');
const root = ref(null);
const steps = computed(() => [
  { period: '2018 — 2023', title: 'ITCS Lorgna · Pindemonte', copy: it.value ? 'Sistemi Informativi Aziendali: dalle prime pagine HTML alla logica di programmazione e ai database.' : 'Business Information Systems: from my first HTML pages to programming logic and databases.' },
  { period: '2024 — 2026', title: 'ITS LAST · Web Developer', copy: it.value ? 'Un percorso full stack completato, tra progetti concreti, lavoro in team e stage aziendali.' : 'A completed full stack programme through hands-on projects, teamwork and internships.' },
  { period: it.value ? '2026 — Oggi' : '2026 — Today', title: it.value ? 'Junior Full Stack Developer' : 'Junior Full Stack Developer', copy: it.value ? 'Cerco un’opportunità come Junior Full Stack Developer. Un team con cui confrontarmi, problemi nuovi da risolvere e spazio per crescere.' : 'Looking for an opportunity as a Junior Full Stack Developer. A team to learn with, new problems to solve and room to grow.' },
]);
let media;
onMounted(() => {
  media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const timeline = gsap.timeline({ scrollTrigger: { trigger: '.journey', start: 'top 65%', end: 'bottom 65%', scrub: 0.7 } });
    timeline.fromTo('.journey-progress span', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 3 }, 0);
    gsap.utils.toArray('.journey-step', root.value).forEach((step, i) => {
      timeline.fromTo(step, { opacity: 0.3, x: 18 }, { opacity: 1, x: 0, duration: 0.65 }, i);
      timeline.fromTo(step.querySelector('.step-number'), { color: '#718096' }, { color: '#8de0e6', duration: 0.65 }, i);
    });
  }, root.value);
});
onBeforeUnmount(() => media?.revert());
</script>
