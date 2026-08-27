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

  { name: 'JavaScript', subtitle: 'ES2023',     category: 'frontend', level: 85, years: 3,
    bg: 'linear-gradient(135deg,#fff8c4,#f7df1e)', color: '#1a1500',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm12.5 18.6c0 2.1-1.2 3-3 3-1.7 0-2.7-.9-3.2-1.9l1.8-1.1c.3.6.6 1.1 1.4 1.1.7 0 1.2-.3 1.2-1.4v-7.4h2v7.7zm4.6 3c-2 0-3.3-1-4-2.3l1.8-1c.4.8 1 1.4 2.1 1.4.9 0 1.5-.4 1.5-1.1 0-.7-.6-1-1.6-1.5l-.5-.2c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.5.5 3.2 1.8l-1.8 1.2c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.4l.5.2c1.9.8 2.9 1.7 2.9 3.5 0 2-1.6 3-3.6 3z"/></svg>',
    descIt: 'TypeScript-friendly, fetch API, manipolazione DOM avanzata.',
    descEn: 'TypeScript-friendly, fetch API, advanced DOM handling.' },

  { name: 'TypeScript', subtitle: 'Type-safe',  category: 'frontend', level: 80, years: 1,
    bg: 'linear-gradient(135deg,#dbeafe,#2563eb)', color: '#0f2f64',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>',
    descIt: 'Tipizzazione statica, interfacce, generici, integrazione con React e Vue.',
    descEn: 'Static typing, interfaces, generics, seamless React and Vue integration.' },

  { name: 'Vue.js',     subtitle: 'v3 + Composition', category: 'frontend', level: 85, years: 2,
    bg: 'linear-gradient(135deg,#cdebd9,#41b883)', color: '#0a3d2c',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h4l6 10 6-10h4L12 22 2 4zm5 0h4l1 2 1-2h4l-5 8.5L7 4z"/></svg>',
    descIt: 'Composition API, Pinia, routing, componenti riusabili.',
    descEn: 'Composition API, Pinia, routing, reusable components.' },

  { name: 'React',      subtitle: 'Hooks',      category: 'frontend', level: 80, years: 1,
    bg: 'linear-gradient(135deg,#cff4ff,#61dafb)', color: '#0a425a',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></svg>',
    descIt: 'JSX, hooks personalizzati, state management.',
    descEn: 'JSX, custom hooks, state management.' },

  { name: 'Next.js',    subtitle: 'App Router', category: 'frontend', level: 75, years: 1,
    bg: 'linear-gradient(135deg,#f3f4f6,#111827)', color: '#030712',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/></svg>',
    descIt: 'Server-Side Rendering (SSR), Static Generation (SSG), App Router e routing avanzato.',
    descEn: 'Server-Side Rendering (SSR), Static Site Generation (SSG), App Router and routing.' },

  { name: 'React Native', subtitle: 'Mobile App', category: 'frontend', level: 70, years: 1,
    bg: 'linear-gradient(135deg,#e0f2fe,#0284c7)', color: '#082f49',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="18" r="1" fill="currentColor"/><circle cx="12" cy="10" r="1.5" fill="currentColor"/><ellipse cx="12" cy="10" rx="4" ry="1.6"/><ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(60 12 10)"/><ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(120 12 10)"/></svg>',
    descIt: 'Sviluppo app mobile cross-platform per iOS e Android con componenti nativi.',
    descEn: 'Cross-platform mobile apps for iOS and Android with native components.' },

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

  { name: 'Express.js', subtitle: 'Framework', category: 'backend', level: 75, years: 1,
    bg: 'linear-gradient(135deg,#e5e7eb,#9ca3af)', color: '#111827',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="50%" y="55%" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="900" font-size="10" fill="currentColor" alignment-baseline="middle">EX</text></svg>',
    descIt: 'Sviluppo di API RESTful, middleware, routing.',
    descEn: 'RESTful API development, middleware, routing.' },

  { name: 'PostgreSQL', subtitle: 'Relational DB', category: 'backend', level: 75, years: 1,
    bg: 'linear-gradient(135deg,#e0e7ff,#336791)', color: '#172554',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z"/></svg>',
    descIt: 'Progettazione schemi relazionali, query SQL complesse, transazioni e integrità.',
    descEn: 'Relational schema design, complex SQL queries, transactions and integrity.' },

  { name: 'MongoDB',    subtitle: 'NoSQL DB',    category: 'backend', level: 70, years: 1,
    bg: 'linear-gradient(135deg,#dcfce7,#16a34a)', color: '#052e16',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>',
    descIt: 'Database documentale NoSQL, collezioni, aggregazioni e query performanti.',
    descEn: 'NoSQL document database, collections, aggregations and efficient queries.' },

  { name: 'MySQL',      subtitle: 'Relational DB', category: 'backend', level: 75, years: 2,
    bg: 'linear-gradient(135deg,#ffedd5,#ea580c)', color: '#431407',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622z"/></svg>',
    descIt: 'Database relazionale, relazioni chiave, query di estrazione e ottimizzazione.',
    descEn: 'Relational database, key relationships, data extraction and query optimization.' },

  // Tools
  { name: 'Tailwind',   subtitle: 'Utility-first', category: 'tools', level: 90, years: 2,
    bg: 'linear-gradient(135deg,#cffafe,#06b6d4)', color: '#053b48',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2z"/></svg>',
    descIt: 'Design system, plugin custom, JIT, theming variabili.',
    descEn: 'Design system, custom plugins, JIT, themeable variables.' },

  { name: 'Bootstrap',  subtitle: 'Components', category: 'tools', level: 75, years: 2,
    bg: 'linear-gradient(135deg,#e6dafe,#7d3eff)', color: '#3a1986',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 2h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3zm3.5 14.7h4.4c2.5 0 4-1.2 4-3.3 0-1.5-1-2.6-2.6-2.8v-.1a2.7 2.7 0 002.1-2.7c0-1.7-1.4-2.9-3.5-2.9H8.5v11.8zm2-7H12c1.3 0 2-.5 2-1.5s-.7-1.5-2-1.5h-1.5v3zm0 5.3v-3.4h1.7c1.5 0 2.3.6 2.3 1.7s-.7 1.7-2.2 1.7h-1.8z"/></svg>',
    descIt: 'Prototipazione rapida, Bootstrap 5, responsive layouts.',
    descEn: 'Rapid prototyping, Bootstrap 5, responsive layouts.' },

  { name: 'GitHub',     subtitle: 'VCS',         category: 'tools', level: 85, years: 3,
    bg: 'linear-gradient(135deg,#1f2937,#0a0e16)', color: '#f9fafb',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>',
    descIt: 'Git flow, branching, pull request review, GitHub Actions.',
    descEn: 'Git flow, branching, PR review, GitHub Actions.' },

  { name: 'Webflow',    subtitle: 'Visual Dev', category: 'tools', level: 75, years: 1,
    bg: 'linear-gradient(135deg,#dbeafe,#146ef5)', color: '#0b2e63',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z"/></svg>',
    descIt: 'Creazione landing page responsive, interazioni avanzate, animazioni e CMS.',
    descEn: 'Responsive landing pages, advanced interactions, animations and CMS.' },

  { name: 'n8n',        subtitle: 'Automation', category: 'tools', level: 70, years: 1,
    bg: 'linear-gradient(135deg,#fee2e2,#ea580c)', color: '#431407',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/></svg>',
    descIt: 'Automazione di workflow complessi, webhook, integrazione API e sincronizzazione dati.',
    descEn: 'Workflow automation, webhooks, API integrations and data sync.' },

  { name: 'Figma',      subtitle: 'Design',      category: 'tools', level: 60, years: 2,
    bg: 'linear-gradient(135deg,#fde2e4,#f24e1e)', color: '#5a0d00',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3H9a3 3 0 100 6h3M12 3v6M12 3h3a3 3 0 110 6h-3M12 9H9a3 3 0 100 6h3M12 9h3a3 3 0 110 6 3 3 0 110-6M12 15v3a3 3 0 11-3-3"/></svg>',
    descIt: 'Auto-layout, componenti, prototipi, handoff developer.',
    descEn: 'Auto-layout, components, prototypes, dev handoff.' },
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

@media (max-width: 640px) {
  .skill-card {
    min-height: 17rem; /* Prevents confidence bar / status from overflowing on mobile */
  }
  .card-face {
    padding: 1rem; /* Tighter padding for more horizontal space */
  }
  .card-face h3 {
    font-size: 1.05rem; /* Slightly smaller title to prevent layout breaking */
  }
  .card-face p {
    font-size: 11px; /* Tighter details text */
  }
  .logo-box {
    width: 2.5rem;
    height: 2.5rem;
  }
  .logo-box :deep(svg) {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
