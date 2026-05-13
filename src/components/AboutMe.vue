<template>
  <div class="relative max-w-6xl mx-auto px-6">

    <!-- ===== TOP: title + portrait, denser layout ===== -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

      <!-- LEFT: title + lead text + meta -->
      <div class="lg:col-span-7 order-2 lg:order-1">
        <p class="text-xs tracking-[0.25em] uppercase text-[var(--sky-700)] mb-4" data-reveal>
          {{ language === 'it' ? '— Profilo' : '— Profile' }}
        </p>
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02] text-[var(--ink)]"
            data-reveal data-reveal-delay="0.05">
          {{ t('aboutMeTitle') }}
          <span class="text-[var(--sky-600)]">{{ t('aboutMeHighlight') }}.</span>
        </h2>

        <p class="mt-6 text-lg md:text-xl text-[var(--ink)] leading-snug font-light"
           data-reveal data-reveal-delay="0.1">
          {{ t('aboutMeDescription') }}
        </p>
        <p class="mt-4 text-[15px] md:text-base text-[var(--ink-soft)] leading-relaxed"
           data-reveal data-reveal-delay="0.15">
          {{ t('whoAmIDescription') }}
        </p>

        <!-- inline contact dl (compact, no separate column) -->
        <dl class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-[14px]"
            data-reveal data-reveal-delay="0.2">
          <div class="info-tile">
            <dt class="info-label">Email</dt>
            <dd>
              <a href="mailto:tommaso.cont2004@gmail.com" class="info-value hover:text-[var(--sky-600)] transition">
                tommaso.cont2004@gmail.com
              </a>
            </dd>
          </div>
          <div class="info-tile">
            <dt class="info-label">Tel</dt>
            <dd class="info-value tabular">+39 345 481 5672</dd>
          </div>
          <div class="info-tile">
            <dt class="info-label">Status</dt>
            <dd class="info-value flex items-center gap-2 text-emerald-600">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ language === 'it' ? 'Disponibile' : 'Available' }}
            </dd>
          </div>
        </dl>

        <button @click="downloadCV"
                class="group inline-flex items-center gap-3 mt-6 bg-[var(--ink)] text-white font-medium rounded-full px-5 py-2.5 hover:bg-[var(--sky-700)] transition-all"
                data-reveal data-reveal-delay="0.25">
          {{ t('downloadCV') }}
          <svg class="w-4 h-4 group-hover:translate-y-0.5 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 15v3a3 3 0 003 3h12a3 3 0 003-3v-3M12 3v13M7.5 11.5L12 16l4.5-4.5"/>
          </svg>
        </button>
      </div>

      <!-- RIGHT: portrait card, smaller and tighter -->
      <div class="lg:col-span-5 order-1 lg:order-2" data-reveal data-reveal-delay="0.05">
        <div class="portrait-card">
          <img :src="profileImg" alt="Tommaso Cont" class="w-full h-full object-cover" @error="onImgError" />
          <div class="portrait-grad"></div>
          <div class="portrait-meta">
            <p class="font-semibold tracking-tight text-base">Tommaso Cont</p>
            <p class="text-[11px] opacity-85 tracking-wide mt-0.5">Verona, IT · Web Developer</p>
          </div>
          <div class="portrait-corner">
            <span class="font-mono text-[10px] tracking-widest">{{ ageYears }}Y</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== TIMELINE: horizontal, compact ===== -->
    <div class="mt-14 lg:mt-16" data-reveal data-reveal-delay="0.15">
      <div class="flex items-baseline justify-between mb-5">
        <p class="text-xs tracking-[0.25em] uppercase text-[var(--sky-700)]">
          {{ language === 'it' ? '— Traiettoria' : '— Trajectory' }}
        </p>
        <p class="text-[11px] tracking-wider uppercase text-[var(--ink-soft)]/70 tabular">
          2018 — 2026
        </p>
      </div>

      <ol class="trajectory" ref="trajectoryEl">
        <li v-for="(item, i) in timeline" :key="i" class="traj-item">
          <div class="traj-dot-wrap">
            <span class="traj-dot" :class="{ 'is-current': item.current, 'is-future': item.future }"></span>
            <span v-if="i < timeline.length - 1" class="traj-line"></span>
          </div>
          <div class="traj-content">
            <p class="text-[11px] tabular tracking-wide text-[var(--sky-700)] uppercase">{{ item.period }}</p>
            <h3 class="text-lg md:text-xl font-semibold text-[var(--ink)] tracking-tight mt-1">
              {{ language === 'it' ? item.titleIt : item.titleEn }}
            </h3>
            <p class="text-[13px] text-[var(--ink-soft)] mt-1.5 leading-relaxed">
              {{ language === 'it' ? item.descIt : item.descEn }}
            </p>
            <span v-if="item.current"
                  class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium tracking-wide">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {{ language === 'it' ? 'In corso' : 'Current' }}
            </span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n';
import CVFile from '../assets/Tommaso Cont CV.pdf';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { t, language } = useI18n();
const trajectoryEl = ref(null);
const scrollTriggers = [];

const initialsAvatar =
  'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#84c0fb"/><stop offset="1" stop-color="#1361c8"/>
      </linearGradient></defs>
      <rect width="400" height="500" fill="url(#g)"/>
      <text x="50%" y="55%" text-anchor="middle"
            font-family="Onest, system-ui, sans-serif"
            font-weight="600" font-size="200" fill="white" opacity="0.95">TC</text>
    </svg>`);

const profileImg = ref('/Users/cont2/Pictures/Photos Library.photoslibrary/resources/derivatives/2/2B58BBBA-343D-4345-8D23-52322B01A587_1_105_c.jpeg');
const onImgError = () => { profileImg.value = initialsAvatar; };

const ageYears = computed(() => {
  const dob = new Date(2004, 7, 1); // approximate, not displayed elsewhere
  const diff = Date.now() - dob.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
});

const timeline = computed(() => [
  {
    period: '2018 — 2023',
    titleIt: 'Lorgna · Pindemonte',
    titleEn: 'Lorgna · Pindemonte',
    descIt: 'Diploma di scuola superiore. Primi approcci con HTML, CSS e logica di programmazione.',
    descEn: 'High school diploma. First steps with HTML, CSS and programming logic.',
  },
  {
    period: '2024 — ' + (language.value === 'it' ? 'Oggi' : 'Today'),
    titleIt: 'ITS LAST · Web Developer',
    titleEn: 'ITS LAST · Web Developer',
    descIt: 'Corso intensivo full-stack con focus front-end. Progetti reali, lavoro in team, stack moderno.',
    descEn: 'Intensive full-stack course with front-end focus. Real projects, team work, modern stack.',
    current: true,
  },
  {
    period: '2026 →',
    titleIt: language.value === 'it' ? 'Stage in azienda' : 'Internship',
    titleEn: 'Internship',
    descIt: 'Cerco un\'esperienza concreta dove portare entusiasmo, curiosità e una solida base front-end.',
    descEn: 'Looking for hands-on experience where I can bring enthusiasm, curiosity and a solid front-end foundation.',
    future: true,
  },
]);

const downloadCV = () => window.open(CVFile, '_blank');

onMounted(() => {
  // Stagger the trajectory items in
  if (trajectoryEl.value) {
    const items = trajectoryEl.value.querySelectorAll('.traj-item');
    const tw = gsap.fromTo(items,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: trajectoryEl.value,
          start: 'top 85%',
          once: true,
        }
      }
    );
    if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
  }
});

onBeforeUnmount(() => {
  scrollTriggers.forEach(s => s.kill());
});
</script>

<style scoped>
/* portrait */
.portrait-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  max-width: 380px;
  margin-left: auto;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--sky-200), var(--sky-600));
  box-shadow:
    0 30px 60px -30px rgba(15, 49, 110, 0.45),
    0 8px 20px -10px rgba(15, 49, 110, 0.2);
  isolation: isolate;
}
.portrait-card img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 6s ease;
}
.portrait-card:hover img { transform: scale(1.06); }
.portrait-grad {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 45%);
  pointer-events: none;
}
.portrait-meta {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1rem 1.25rem;
  color: white;
}
.portrait-corner {
  position: absolute;
  top: 0.75rem; right: 0.85rem;
  width: 38px; height: 38px;
  border-radius: 999px;
  background: rgba(255,255,255,0.16);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.35);
  color: white;
  display: flex; align-items: center; justify-content: center;
}

/* info tiles */
.info-tile {
  padding: 0.7rem 0.9rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--sky-100);
}
.info-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--ink-soft);
  margin-bottom: 0.25rem;
}
.info-value {
  font-size: 13px;
  color: var(--ink);
  font-weight: 500;
}

/* ===== trajectory (horizontal on desktop) ===== */
.trajectory {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--sky-100);
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .trajectory {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.traj-item {
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.85rem;
  padding: 0.5rem 0 1.25rem;
}
@media (min-width: 768px) {
  .traj-item {
    grid-template-columns: 1fr;
    grid-template-rows: 24px auto;
    gap: 0.85rem;
    padding: 0;
  }
}

.traj-dot-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
@media (min-width: 768px) {
  .traj-dot-wrap { justify-content: flex-start; }
}

.traj-dot {
  width: 11px; height: 11px;
  border-radius: 50%;
  background: var(--sky-100);
  border: 2px solid var(--sky-300);
  flex: none;
  transition: transform 240ms ease;
  z-index: 1;
}
.traj-dot.is-current {
  background: var(--sky-500);
  border-color: var(--sky-500);
  box-shadow: 0 0 0 5px rgba(31, 124, 232, 0.18);
}
.traj-dot.is-future {
  background: white;
  border-color: var(--sky-400);
  border-style: dashed;
}
.traj-line {
  position: absolute;
  left: 11px;
  top: 50%;
  height: 1px;
  width: calc(100% + 1.5rem);
  background: linear-gradient(to right, var(--sky-200), transparent);
  z-index: 0;
}
@media (max-width: 767px) {
  .traj-line {
    top: 11px;
    left: 50%;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, var(--sky-200), transparent);
  }
}

.traj-item:hover .traj-dot { transform: scale(1.25); }

.traj-content { min-width: 0; }
</style>
