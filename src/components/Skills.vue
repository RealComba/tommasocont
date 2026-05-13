<template>
  <div class="relative max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
      <div data-reveal>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[var(--ink)]">
          {{ t('skillsTitle') }}
          <span class="text-[var(--sky-600)]">{{ t('skillsHighlight') }}.</span>
        </h2>
        <p class="mt-5 max-w-xl text-[var(--ink-soft)] text-base md:text-lg">
          {{ language === 'it'
            ? 'Filtra per categoria. Passa il mouse su una skill per vederne il dettaglio.'
            : 'Filter by category. Hover any skill to flip the card.' }}
        </p>
      </div>

      <!-- Filter pills -->
      <div class="flex flex-wrap gap-2" data-reveal data-reveal-delay="0.15">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="active = cat.id"
          :class="[
            'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-all',
            active === cat.id
              ? 'bg-[var(--ink)] text-white border-[var(--ink)] shadow-lg shadow-blue-900/20'
              : 'bg-white/70 backdrop-blur text-[var(--ink-soft)] border-[var(--sky-200)] hover:border-[var(--sky-400)] hover:text-[var(--ink)]'
          ]">
          {{ language === 'it' ? cat.it : cat.en }}
          <span class="text-xs tabular opacity-60">{{ cat.count }}</span>
        </button>
      </div>
    </div>

    <!-- Skills grid -->
    <div ref="gridRef" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      <article
        v-for="(skill, idx) in filtered"
        :key="skill.name"
        class="skill-wrap"
        :style="{ '--float-delay': (idx * 0.18) + 's' }"
      >
        <div class="skill-card">
          <!-- FRONT -->
          <div class="card-face card-front">
            <div class="flex items-start justify-between">
              <div class="logo-box" :style="{ background: skill.bg, color: skill.color }">
                <span v-html="skill.icon"></span>
              </div>
              <span class="text-[11px] tabular text-[var(--ink-soft)]/70 mt-1">{{ skill.years }}y</span>
            </div>

            <div class="mt-5">
              <h3 class="font-semibold text-lg text-[var(--ink)] tracking-tight">{{ skill.name }}</h3>
              <p class="text-[12px] text-[var(--ink-soft)] mt-0.5">{{ skill.subtitle }}</p>

              <div class="mt-4">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[11px] text-[var(--ink-soft)]">
                    {{ language === 'it' ? 'Confidenza' : 'Confidence' }}
                  </span>
                  <span class="text-xs tabular text-[var(--sky-700)] font-semibold">{{ skill.level }}%</span>
                </div>
                <div class="h-1.5 rounded-full bg-[var(--sky-100)] overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-[var(--sky-400)] to-[var(--sky-700)]"
                       :style="{ transform: `scaleX(${skill.level / 100})`, transformOrigin: 'left' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- BACK -->
          <div class="card-face card-back">
            <div class="flex items-start justify-between">
              <h3 class="font-semibold text-lg tracking-tight">{{ skill.name }}</h3>
              <span class="text-[11px] uppercase tracking-wide text-white/55">{{ skill.subtitle }}</span>
            </div>

            <p class="text-[13px] leading-relaxed mt-3 text-white/90 flex-1">
              {{ language === 'it' ? skill.descIt : skill.descEn }}
            </p>

            <div class="mt-3 pt-3 border-t border-white/15">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] text-white/65">
                  {{ language === 'it' ? 'Confidenza' : 'Confidence' }}
                </span>
                <span class="text-sm tabular font-semibold">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 rounded-full bg-white/15 overflow-hidden">
                <div class="h-full rounded-full bg-white"
                     :style="{ transform: `scaleX(${skill.level / 100})`, transformOrigin: 'left' }"></div>
              </div>
              <div class="flex items-center justify-between mt-3 text-[11px] text-white/65">
                <span class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  {{ language === 'it' ? 'In uso' : 'Active' }}
                </span>
                <span class="tabular">
                  {{ skill.years }}{{ language === 'it' ? (skill.years === 1 ? ' anno' : ' anni') : (skill.years === 1 ? ' year' : ' years') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- Footnote -->
    <div class="mt-14 flex items-center justify-center gap-3 text-[var(--ink-soft)]" data-reveal data-reveal-y="20">
      <span class="h-px w-10 bg-[var(--sky-300)]"></span>
      <span class="text-[12px] tracking-wide text-[var(--sky-700)]">always learning</span>
      <span class="h-px w-10 bg-[var(--sky-300)]"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from '../i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { t, language } = useI18n();
const gridRef = ref(null);
const scrollTriggers = [];

const skills = [
  // Frontend
  { name: 'HTML',       subtitle: 'Markup',     category: 'frontend', level: 95, years: 3,
    bg: 'linear-gradient(135deg,#ffe5d6,#ff7a3d)', color: '#5a1a05',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 2l1.6 19.2L12 23l7.4-1.8L21 2H3zm14.5 6.7H8.7l.2 2.5h8.4l-.7 7.6L12 19.6l-4.6-1.5-.3-3.6h2.3l.2 1.7L12 17l2.4-.8.2-2.6H7l-.5-7.4h11l-.2 2.5z"/></svg>',
    descIt: 'Markup semantico, accessibilità, integrazione con framework moderni.',
    descEn: 'Semantic markup, accessibility, integration with modern frameworks.' },

  { name: 'CSS',        subtitle: 'Styling',    category: 'frontend', level: 90, years: 3,
    bg: 'linear-gradient(135deg,#dbeafe,#1e63d4)', color: '#0a2548',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 2l1.6 19.2L12 23l7.4-1.8L21 2H3zm14.6 4.7l-.4 4.4-.2 2.7-.6 5.2-4.4 1.2-4.4-1.2-.3-3.4h2.3l.2 1.7L12 17l2.6-.7.2-2.7H6.6L6.4 9h8.6l.2-2.3H7L6.7 4h10.9l-.2 2.7z"/></svg>',
    descIt: 'Grid, Flexbox, animazioni, design system con custom properties.',
    descEn: 'Grid, Flexbox, animations, design systems with custom properties.' },

  { name: 'JavaScript', subtitle: 'ES2023',     category: 'frontend', level: 80, years: 3,
    bg: 'linear-gradient(135deg,#fff8c4,#f7df1e)', color: '#1a1500',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm12.5 18.6c0 2.1-1.2 3-3 3-1.7 0-2.7-.9-3.2-1.9l1.8-1.1c.3.6.6 1.1 1.4 1.1.7 0 1.2-.3 1.2-1.4v-7.4h2v7.7zm4.6 3c-2 0-3.3-1-4-2.3l1.8-1c.4.8 1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.7-.6-1-1.6-1.5l-.5-.2c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.8l-1.8 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.5.2c1.9.8 2.9 1.7 2.9 3.5 0 2-1.6 3-3.6 3z"/></svg>',
    descIt: 'TypeScript-friendly, fetch API, manipolazione DOM avanzata.',
    descEn: 'TypeScript-friendly, fetch API, advanced DOM handling.' },

  { name: 'Vue.js',     subtitle: 'v3 + Composition', category: 'frontend', level: 85, years: 2,
    bg: 'linear-gradient(135deg,#cdebd9,#41b883)', color: '#0a3d2c',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h4l6 10 6-10h4L12 22 2 4zm5 0h4l1 2 1-2h4l-5 8.5L7 4z"/></svg>',
    descIt: 'Composition API, Pinia, routing, componenti riusabili.',
    descEn: 'Composition API, Pinia, routing, reusable components.' },

  { name: 'React',      subtitle: 'Hooks',      category: 'frontend', level: 70, years: 1,
    bg: 'linear-gradient(135deg,#cff4ff,#61dafb)', color: '#0a425a',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></svg>',
    descIt: 'JSX, hooks personalizzati, state management.',
    descEn: 'JSX, custom hooks, state management.' },

  { name: 'Tailwind',   subtitle: 'Utility-first', category: 'frontend', level: 90, years: 2,
    bg: 'linear-gradient(135deg,#cffafe,#06b6d4)', color: '#053b48',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2z"/></svg>',
    descIt: 'Design system, plugin custom, JIT, theming variabili.',
    descEn: 'Design system, custom plugins, JIT, themeable variables.' },

  { name: 'Bootstrap',  subtitle: 'Components', category: 'frontend', level: 75, years: 2,
    bg: 'linear-gradient(135deg,#e6dafe,#7d3eff)', color: '#3a1986',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 2h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3zm3.5 14.7h4.4c2.5 0 4-1.2 4-3.3 0-1.5-1-2.6-2.6-2.8v-.1a2.7 2.7 0 002.1-2.7c0-1.7-1.4-2.9-3.5-2.9H8.5v11.8zm2-7H12c1.3 0 2-.5 2-1.5s-.7-1.5-2-1.5h-1.5v3zm0 5.3v-3.4h1.7c1.5 0 2.3.6 2.3 1.7s-.7 1.7-2.2 1.7h-1.8z"/></svg>',
    descIt: 'Prototipazione rapida, Bootstrap 5, responsive layouts.',
    descEn: 'Rapid prototyping, Bootstrap 5, responsive layouts.' },

  // Backend
  { name: 'PHP',        subtitle: 'Server-side', category: 'backend', level: 65, years: 1,
    bg: 'linear-gradient(135deg,#dde0ff,#777bb4)', color: '#26284b',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="11" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 9.5h2.4c1.4 0 2 .6 1.7 2-.3 1.4-1.1 2-2.5 2H5.4l-.3 1.5H4l1-5.5zm1 1.2l-.3 1.6h.9c.6 0 1-.3 1.1-.8.1-.5-.1-.8-.7-.8H6zm5 .8l.5-2.4h1.2l-.3 1.6h1c1.2 0 1.7.5 1.5 1.5l-.5 2.6h-1.2l.5-2.5c.1-.4-.1-.6-.5-.6h-1l-.5 3.1H10l1-5.3zm5.5-.8h2.4c1.4 0 2 .6 1.7 2-.3 1.4-1.1 2-2.5 2H17l-.3 1.5h-1.1l1-5.5zm1 1.2l-.3 1.6h.9c.6 0 1-.3 1.1-.8.1-.5-.1-.8-.7-.8h-1z"/></svg>',
    descIt: 'Composer, MVC, integrazione con database MySQL.',
    descEn: 'Composer, MVC pattern, MySQL database integration.' },

  { name: 'Node.js',    subtitle: 'Runtime',    category: 'backend', level: 70, years: 1,
    bg: 'linear-gradient(135deg,#d6f0d6,#5fa04e)', color: '#1a3d10',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.6c-.3 0-.5.07-.7.2L3 6.5c-.4.25-.7.7-.7 1.2v9c0 .5.3.95.7 1.2l2.1 1.2c1 .5 1.4.5 1.8.5 1.4 0 2.2-.85 2.2-2.3V8.4c0-.1-.1-.2-.2-.2H8c-.1 0-.2.1-.2.2v8.6c0 .65-.7 1.3-1.8.75L3.8 16.6c-.07-.04-.1-.12-.1-.2v-9c0-.08.03-.16.1-.2l8.1-4.65c.06-.04.14-.04.2 0l8.1 4.65c.07.04.1.12.1.2v9c0 .08-.04.16-.1.2L12.1 21.25c-.06.04-.14.04-.2 0L9.84 20c-.06-.04-.14-.04-.2 0-.5.3-.6.36-1.1.5-.1.04-.27.1.05.3l2.7 1.6c.3.16.6.25.9.25.3 0 .6-.09.9-.25l8.1-4.65c.4-.25.7-.7.7-1.2v-9c0-.5-.3-.95-.7-1.2L12.7 1.8c-.2-.13-.4-.2-.7-.2zm2.2 6.6c-2.3 0-3.7 1-3.7 2.6 0 1.75 1.35 2.25 3.55 2.45 2.6.25 2.8.6 2.8 1.1 0 .85-.7 1.2-2.35 1.2-2.1 0-2.55-.5-2.7-1.5-.02-.1-.1-.2-.22-.2h-1.2c-.13 0-.25.1-.25.23 0 1.3.7 2.85 4.4 2.85 2.55 0 4-1 4-2.75 0-1.7-1.15-2.15-3.6-2.5-2.5-.3-2.7-.5-2.7-1.05 0-.5.2-1.1 2.05-1.1 1.65 0 2.25.35 2.5 1.45.02.1.1.2.22.2h1.2c.06 0 .14-.03.2-.08.05-.05.07-.12.07-.2-.2-2.2-1.65-3.2-4.2-3.2z"/></svg>',
    descIt: 'Express, REST API, npm ecosystem, build tools (Vite).',
    descEn: 'Express, REST APIs, npm ecosystem, build tools (Vite).' },

  // Tools
  { name: 'GitHub',     subtitle: 'VCS',         category: 'tools', level: 85, years: 3,
    bg: 'linear-gradient(135deg,#1f2937,#0a0e16)', color: '#f9fafb',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>',
    descIt: 'Git flow, branching, pull request review, GitHub Actions.',
    descEn: 'Git flow, branching, PR review, GitHub Actions.' },

  { name: 'Figma',      subtitle: 'Design',      category: 'tools', level: 75, years: 2,
    bg: 'linear-gradient(135deg,#fde2e4,#f24e1e)', color: '#5a0d00',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3H9a3 3 0 100 6h3M12 3v6M12 3h3a3 3 0 110 6h-3M12 9H9a3 3 0 100 6h3M12 9h3a3 3 0 110 6 3 3 0 110-6M12 15v3a3 3 0 11-3-3"/></svg>',
    descIt: 'Auto-layout, componenti, prototipi, handoff developer.',
    descEn: 'Auto-layout, components, prototypes, dev handoff.' },

  { name: 'Vite',       subtitle: 'Build tool',  category: 'tools', level: 80, years: 1,
    bg: 'linear-gradient(135deg,#fff7c2,#a259ff)', color: '#3a0a6b',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 4.7l-9.5 16.5c-.4.7-1.4.7-1.7 0L1.4 4.7c-.4-.7.2-1.5 1-1.4l9.7 1.6c.1 0 .2 0 .3 0l9.5-1.6c.7-.1 1.2.7.8 1.4zM15 7.5l-2 .3v6l1.6-3 1.5-.3-.5-3.1z"/></svg>',
    descIt: 'HMR fulmineo, plugin custom, ottimizzazioni build.',
    descEn: 'Lightning HMR, custom plugins, build optimizations.' },
];

const active = ref('all');

const categories = computed(() => {
  const counts = skills.reduce((acc, s) => { acc[s.category] = (acc[s.category]||0) + 1; return acc; }, {});
  return [
    { id: 'all',      it: 'Tutto',    en: 'All',      count: skills.length },
    { id: 'frontend', it: 'Frontend', en: 'Frontend', count: counts.frontend || 0 },
    { id: 'backend',  it: 'Backend',  en: 'Backend',  count: counts.backend || 0 },
    { id: 'tools',    it: 'Strumenti',en: 'Tools',    count: counts.tools || 0 },
  ];
});

const filtered = computed(() =>
  active.value === 'all' ? skills : skills.filter(s => s.category === active.value)
);

// ===== GSAP: entrance reveal + re-stagger on filter change =====
const animateCards = () => {
  if (!gridRef.value) return;
  const cards = gridRef.value.querySelectorAll('.skill-wrap');
  gsap.fromTo(cards,
    { opacity: 0, y: 30, rotateX: -8, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: { each: 0.06, from: 'start' },
    }
  );
};

onMounted(() => {
  // Trigger entrance once the grid enters viewport
  if (gridRef.value) {
    const st = ScrollTrigger.create({
      trigger: gridRef.value,
      start: 'top 85%',
      once: true,
      onEnter: animateCards,
    });
    scrollTriggers.push(st);
  }
});

// Re-stagger when filter changes
watch(active, async () => {
  await nextTick();
  animateCards();
});

onBeforeUnmount(() => {
  scrollTriggers.forEach(s => s.kill());
});
</script>

<style scoped>
.skill-wrap {
  perspective: 1400px;
  /* idle float — subtle vertical drift, staggered per card via --float-delay */
  animation: float 7s ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
  will-change: transform;
}

.skill-card {
  position: relative;
  min-height: 14rem;
  transform-style: preserve-3d;
  /* Slower, more dynamic ease — slight overshoot at the end */
  transition: transform 1.6s cubic-bezier(.16,.84,.24,1.06), box-shadow 600ms ease;
}

.skill-wrap:hover {
  animation-play-state: paused;
}
.skill-wrap:hover .skill-card {
  transform: rotateY(180deg) translateZ(20px);
}

.card-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  padding: 1.4rem 1.4rem 1.5rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.card-front {
  background: white;
  border: 1px solid rgba(187, 220, 253, 0.7);
  box-shadow: 0 6px 16px -10px rgba(19, 78, 161, 0.18);
  transition: box-shadow 280ms ease, border-color 280ms ease;
}
.skill-wrap:hover .card-front {
  border-color: var(--sky-300);
}

.card-back {
  background: linear-gradient(135deg, var(--sky-600) 0%, var(--sky-800) 100%);
  color: white;
  transform: rotateY(180deg);
  box-shadow: 0 24px 60px -22px rgba(19, 78, 161, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.logo-box {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  transition: transform 700ms cubic-bezier(.16,.84,.24,1.06);
}
.logo-box :deep(svg) {
  width: 1.5rem;
  height: 1.5rem;
}
.skill-wrap:hover .logo-box { transform: scale(1.12) rotate(-8deg); }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}

@media (prefers-reduced-motion: reduce) {
  .skill-wrap { animation: none; }
  .skill-card { transition: transform 600ms ease; }
}
</style>
