<template>
  <section ref="sectionEl" class="projects-section">
    <div class="projects-layout max-w-7xl mx-auto">
      <!-- ============ LEFT: intro (stays in place via section pin) ============ -->
      <aside class="projects-intro" ref="introEl">
        <p class="text-xs tracking-[0.25em] uppercase text-[var(--sky-700)] mb-4">
          {{ language === 'it' ? '— Selezione' : '— Selected work' }}
        </p>
        <h2 class="intro-title">
          {{ t('projectsTitle') }}
          <span class="text-[var(--sky-600)]">{{ t('projectsHighlight') }}.</span>
        </h2>
        <p class="intro-desc">
          {{ language === 'it'
            ? 'Una selezione di esperimenti, prototipi e progetti completi.'
            : 'A selection of experiments, prototypes and finished projects.' }}
        </p>

        <!-- live counter -->
        <div class="intro-counter">
          <div class="counter-num">
            <span class="counter-current tabular">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
            <span class="counter-divider">/</span>
            <span class="counter-total tabular">{{ String(projectsList.length).padStart(2, '0') }}</span>
          </div>
          <div class="counter-bar">
            <div class="counter-fill" :style="{ transform: `scaleX(${(currentIndex + 1) / projectsList.length})` }"></div>
          </div>
          <p class="counter-current-title">
            {{ projectsList[currentIndex]?.title }}
          </p>
          <p class="counter-hint" v-if="!isMobile">
            {{ language === 'it' ? 'Scorri per cambiare progetto' : 'Scroll to switch' }}
            <span class="counter-arrow">↓</span>
          </p>
        </div>
      </aside>

      <!-- ============ RIGHT: card stack ============ -->
      <div ref="stageEl" class="card-stage" :class="{ 'is-stack': !isMobile }">
        <article
          v-for="(p, i) in projectsList"
          :key="p.title"
          class="project-card"
          :data-index="i"
          :ref="el => cardRefs[i] = el"
        >
          <!-- Top: number + year -->
          <div class="card-top">
            <span class="card-index tabular">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="card-line"></span>
            <span class="card-year tabular">{{ p.year }}</span>
          </div>

          <!-- Image -->
          <div class="card-visual">
            <div class="visual-frame">
              <img :src="p.image" alt="" class="visual-img" :ref="el => imgRefs[i] = el">
              <div class="visual-grid"></div>
              <div class="visual-shine"></div>
            </div>
          </div>

          <!-- Text -->
          <div class="card-text">
            <h3 class="card-title">{{ p.title }}</h3>
            <p class="card-desc">{{ p.description }}</p>

            <div class="card-bottom">
              <div class="card-tech">
                <span v-for="tech in p.technologies" :key="tech" class="tech-chip">{{ tech }}</span>
              </div>

              <a :href="p.githubUrl" target="_blank" rel="noopener noreferrer" class="card-cta">
                <span>{{ language === 'it' ? 'GitHub' : 'GitHub' }}</span>
                <span class="cta-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M9 7h8v8"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import img1 from '../assets/image.png';
import img2 from '../assets/Screenshot 2026-01-14 alle 14.42.12.png';
import img3 from '../assets/Screenshot 2026-01-14 alle 14.56.01.png';
import { useI18n } from '../i18n';
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { t, language } = useI18n();
const sectionEl = ref(null);
const introEl = ref(null);
const stageEl = ref(null);
const cardRefs = ref([]);
const imgRefs = ref([]);
const scrollTriggers = [];
const currentIndex = ref(0);
const isMobile = ref(false);

const baseProjects = [
  {
    title: 'Sito Streaming',
    titleEn: 'Streaming Website',
    year: '2025',
    description: 'Sito personale per cercare e guardare film e serie TV in streaming.',
    descriptionEn: 'Personal website to search and watch movies and TV series.',
    image: img1,
    technologies: ['React', 'Tailwind', 'JavaScript'],
    githubUrl: 'https://github.com/RealComba/react-movie.git',
  },
  {
    title: 'Budget Manager',
    titleEn: 'Budget Manager',
    year: '2025',
    description: 'Webapp per la gestione del budget personale con grafici interattivi.',
    descriptionEn: 'Web app for personal budget management with interactive charts.',
    image: img2,
    technologies: ['Vue.js', 'Tailwind', 'Chart.js'],
    githubUrl: 'https://github.com/RealComba/vue-budget',
  },
  {
    title: 'Mappa Interattiva',
    titleEn: 'Interactive Map',
    year: '2026',
    description: 'Mappa interattiva con elenco filtrato di servizi per area geografica.',
    descriptionEn: 'Interactive map with a filtered list of services by geographic area.',
    image: img3,
    technologies: ['Vue.js', 'Tailwind', 'Leaflet'],
    githubUrl: 'https://github.com/RealComba/Interactive-Europe-Map',
  },
];

const projectsList = computed(() =>
  baseProjects.map(p => ({
    ...p,
    title: language.value === 'it' ? p.title : p.titleEn,
    description: language.value === 'it' ? p.description : p.descriptionEn,
  }))
);

const updateBreakpoint = () => {
  isMobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  updateBreakpoint();
  window.addEventListener('resize', updateBreakpoint);

  // ===== Intro entrance =====
  if (introEl.value) {
    gsap.from(introEl.value.children, {
      opacity: 0, y: 30,
      duration: 1, ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: introEl.value, start: 'top 80%', once: true }
    });
  }

  // ===== Pinned card stack (desktop only) =====
  if (!isMobile.value && stageEl.value) {
    const cards = gsap.utils.toArray('.project-card', stageEl.value);

    // Stack starting position: cards centered, each slightly offset to suggest depth
    gsap.set(cards, {
      xPercent: -50,
      yPercent: -50,
      x: (i) => -6 * i,
      y: (i) => -6 * i,
      rotate: (i) => (i % 2 === 0 ? -0.6 : 0.8) * i,
      zIndex: (i) => cards.length - i,
      autoAlpha: 1,
    });

    // Animation: each card flies upward off-screen, staggered
    const stackTween = gsap.to(cards, {
      yPercent: -180,
      rotate: -3,
      stagger: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: sectionEl.value,
        start: 'top top',
        end: '+=' + (cards.length * 50) + '%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Bias the counter to switch earlier — about halfway through each
          // card's "leaving" segment, so the number updates before the card
          // is fully off screen.
          const total = cards.length;
          const earlyBias = 0.5 / total;
          const idx = Math.min(
            total - 1,
            Math.max(0, Math.floor((self.progress + earlyBias) * total))
          );
          if (idx !== currentIndex.value) currentIndex.value = idx;
        },
      },
    });
    if (stackTween.scrollTrigger) scrollTriggers.push(stackTween.scrollTrigger);

    // Subtle parallax on images inside cards (only the topmost benefits visibly)
    imgRefs.value.forEach((img, idx) => {
      if (!img) return;
      const tw = gsap.to(img, {
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl.value,
          start: 'top top',
          end: '+=' + (cards.length * 50) + '%',
          scrub: 1,
        },
      });
      if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
    });
  } else if (stageEl.value) {
    // Mobile: simple stagger entrance, no pin
    const cards = stageEl.value.querySelectorAll('.project-card');
    cards.forEach((card, idx) => {
      const tw = gsap.fromTo(card,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
            onEnter: () => { currentIndex.value = idx; },
          },
        });
      if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
    });
  }

  setTimeout(() => ScrollTrigger.refresh(), 250);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBreakpoint);
  scrollTriggers.forEach(s => s.kill());
});
</script>

<style scoped>
/* ============ Section ============ */
.projects-section {
  position: relative;
}

.projects-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .projects-layout {
    grid-template-columns: 5fr 7fr;
    gap: 4rem;
    align-items: center;
    min-height: 100vh;
    padding: 0 1.5rem;
  }
}

/* ============ LEFT: intro ============ */
.projects-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.intro-title {
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.intro-desc {
  margin-top: 1rem;
  color: var(--ink-soft);
  font-size: 1rem;
  line-height: 1.55;
  max-width: 32ch;
}

/* live counter */
.intro-counter {
  margin-top: 2rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--sky-100);
  max-width: 320px;
}
.counter-num {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.counter-current {
  font-size: 3rem;
  line-height: 1;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.counter-divider { font-size: 2rem; color: var(--sky-300); line-height: 1; }
.counter-total { font-size: 1.25rem; color: var(--ink-soft); line-height: 1; }
.counter-bar {
  margin-top: 1rem;
  height: 2px;
  background: var(--sky-100);
  border-radius: 999px;
  overflow: hidden;
}
.counter-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, var(--sky-400), var(--sky-700));
  border-radius: 999px;
  transform-origin: left;
  transition: transform 600ms cubic-bezier(.16,.84,.24,1.06);
}
.counter-current-title {
  margin-top: 0.85rem;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sky-700);
  font-weight: 500;
}
.counter-hint {
  margin-top: 0.75rem;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.counter-arrow {
  display: inline-block;
  animation: hint-arrow 2s ease-in-out infinite;
}
@keyframes hint-arrow {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50%      { transform: translateY(4px); opacity: 1; }
}

/* ============ RIGHT: stage ============ */
.card-stage {
  position: relative;
  width: 100%;
}

/* Desktop: stage is a centered stack area */
.card-stage.is-stack {
  height: 78vh;
  max-height: 700px;
}

/* ============ Card ============ */
.project-card {
  background: white;
  border: 1px solid var(--sky-100);
  border-radius: 1.4rem;
  padding: 1.25rem;
  box-shadow:
    0 30px 80px -40px rgba(15, 49, 110, 0.4),
    0 8px 24px -10px rgba(15, 49, 110, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

/* Stacked layout on desktop */
.card-stage.is-stack .project-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(100%, 580px);
  max-height: 78vh;
  visibility: hidden; /* shown by GSAP via autoAlpha */
}

/* Mobile fallback layout */
@media (max-width: 1023px) {
  .card-stage {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-card {
    width: 100%;
    padding: 1rem;
  }
}

/* card top bar */
.card-top {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.85rem;
  color: var(--ink-soft);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.card-index { font-weight: 600; color: var(--sky-700); }
.card-line {
  display: block;
  height: 1px;
  background: linear-gradient(to right, var(--sky-200), transparent 70%);
}
.card-year { color: var(--ink-soft); opacity: 0.7; }

/* visual */
.card-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
}
.visual-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, var(--sky-100), var(--sky-200));
  box-shadow: 0 10px 30px -15px rgba(15, 49, 110, 0.3);
  isolation: isolate;
}
.visual-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transition: transform 600ms ease;
}
.visual-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 36px 36px;
  mix-blend-mode: overlay;
  pointer-events: none;
}
.visual-shine {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 35%, transparent 65%, rgba(15,49,110,0.15) 100%);
  pointer-events: none;
  mix-blend-mode: overlay;
}

/* text */
.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.card-title {
  font-size: clamp(1.3rem, 2.5vw, 1.85rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: var(--ink);
  overflow-wrap: anywhere;
  word-break: normal;
}

.card-desc {
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.55;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.35rem;
  flex-wrap: wrap;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.tech-chip {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  letter-spacing: 0.02em;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: var(--sky-50);
  border: 1px solid var(--sky-200);
  color: var(--sky-700);
}

.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
  padding: 0.4rem 0.4rem 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--sky-200);
  background: white;
  transition: border-color 240ms ease, background 240ms ease;
}
.card-cta:hover {
  border-color: var(--sky-400);
  background: var(--sky-50);
}
.cta-arrow {
  display: inline-flex;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--ink);
  color: white;
  align-items: center;
  justify-content: center;
  transition: transform 320ms cubic-bezier(.16,.84,.24,1.06), background 240ms ease;
}
.cta-arrow svg { width: 11px; height: 11px; }
.card-cta:hover .cta-arrow {
  transform: translate(2px, -2px) rotate(8deg);
  background: var(--sky-600);
}
</style>
