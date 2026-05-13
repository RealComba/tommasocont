<template>
  <div ref="rootRef" class="overflow-hidden">
    <!-- =================== NAVBAR (floating glass pill) =================== -->
    <header
      ref="navEl"
      class="nav-shell"
      :class="{ 'is-scrolled': isScrolled }">
      <div ref="navInner" class="nav-inner">
        <!-- left: pulse dot only (Tommaso Cont removed) -->
        <div class="nav-pulse">
          <span class="pulse-dot" :class="{ 'is-light': !isScrolled }"></span>
        </div>

        <nav class="nav-links">
          <a href="#about"    class="nav-link" :class="{ 'is-light': !isScrolled }">{{ language === 'it' ? 'Chi sono' : 'About' }}</a>
          <a href="#skills"   class="nav-link" :class="{ 'is-light': !isScrolled }">{{ language === 'it' ? 'Competenze' : 'Skills' }}</a>
          <a href="#projects" class="nav-link" :class="{ 'is-light': !isScrolled }">{{ language === 'it' ? 'Progetti' : 'Projects' }}</a>
          <a href="#contact"  class="nav-link" :class="{ 'is-light': !isScrolled }">{{ language === 'it' ? 'Contatti' : 'Contact' }}</a>
        </nav>

        <button
          @click="toggleLanguage"
          class="lang-btn"
          :class="{ 'is-light': !isScrolled }"
          :title="language === 'it' ? 'Switch to English' : 'Cambia a Italiano'">
          <span class="text-base leading-none">{{ language === 'it' ? '🇬🇧' : '🇮🇹' }}</span>
          <span class="uppercase text-[11px] tracking-wide font-medium">{{ language === 'it' ? 'EN' : 'IT' }}</span>
        </button>
      </div>
    </header>

    <!-- =================== HERO =================== -->
    <section class="relative min-h-screen">
      <div ref="vantaRef" class="absolute inset-0 w-full h-full z-0 overflow-x-hidden"></div>

      <!-- hero content -->
      <div ref="heroContent" class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-white text-center">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-[11px] md:text-xs tracking-wider uppercase font-medium mb-7">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          {{ language === 'it' ? 'Disponibile per stage' : 'Available for internship' }}
        </div>

        <h1 ref="heroTitle" class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98]">
          {{ t('heroTitle') }}
        </h1>

        <p class="max-w-xl text-base sm:text-lg md:text-xl text-white/85 mt-6 font-light tracking-wide">
          {{ t('heroSubtitle') }}
        </p>

        <div class="flex items-center gap-4 mt-10">
          <a href="#projects"
             class="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/70 transition-all text-white font-medium">
            {{ language === 'it' ? 'Esplora i progetti' : 'Explore projects' }}
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>

        <!-- scroll indicator -->
        <div ref="scrollHint" class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/55 text-[10px] tracking-[0.3em] uppercase">
          <span>{{ language === 'it' ? 'Scorri' : 'Scroll' }}</span>
          <span class="scroll-line"></span>
        </div>
      </div>
    </section>

    <section id="about"    class="sky-wash py-20 md:py-24 px-6"><AboutMe /></section>
    <section id="skills"   class="paper-wash py-24 md:py-32"><Skills /></section>
    <section id="projects" class="sky-wash py-24 md:py-32"><Projects /></section>
    <section id="contact"><Contact /></section>
  </div>
</template>

<script setup>
import AboutMe from "./components/AboutMe.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import Skills from "./components/Skills.vue";
import Projects from "./components/Project.vue";
import { useI18n } from "./i18n";
import Contact from "./components/Contact.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const { language, t, toggleLanguage } = useI18n();

const vantaRef = ref(null);
const heroContent = ref(null);
const heroTitle = ref(null);
const scrollHint = ref(null);
const rootRef = ref(null);
const navEl = ref(null);
const navInner = ref(null);
const isScrolled = ref(false);
let vantaEffect = null;
const scrollTriggers = [];

const onScroll = () => {
  // Switch to "scrolled" state once past ~70% of viewport height
  const threshold = Math.max(120, window.innerHeight * 0.7);
  isScrolled.value = window.scrollY > threshold;
};

onMounted(() => {
  if (vantaRef.value) {
    vantaEffect = CLOUDS({
      el: vantaRef.value,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
    });
  }

  // Scroll listener for navbar state
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Navbar morph is handled entirely via CSS transitions on .is-scrolled class
  // (GSAP scrub on max-width/margin auto / border-radius doesn't interpolate cleanly).

  // ===== HERO entrance =====
  if (heroContent.value) {
    gsap.from(heroContent.value.children, {
      y: 28,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.15,
    });
  }

  // Parallax + fade out for hero text on scroll
  if (heroContent.value) {
    const t1 = gsap.to(heroContent.value, {
      y: 80,
      opacity: 0.25,
      ease: "none",
      scrollTrigger: {
        trigger: heroContent.value,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    if (t1.scrollTrigger) scrollTriggers.push(t1.scrollTrigger);
  }

  // Scroll-hint fade out
  if (scrollHint.value) {
    const sh = gsap.to(scrollHint.value, {
      opacity: 0,
      y: -20,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: () => `${window.innerHeight * 0.3} top`,
        scrub: true,
      },
    });
    if (sh.scrollTrigger) scrollTriggers.push(sh.scrollTrigger);
  }

  // Global reveal-on-scroll for [data-reveal] elements
  const reveals = rootRef.value?.querySelectorAll("[data-reveal]") ?? [];
  reveals.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || "0");
    const y = parseFloat(el.dataset.revealY || "40");
    const tw = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none", once: true },
      },
    );
    if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
  });

  // refresh after layout settles (fonts, images)
  setTimeout(() => ScrollTrigger.refresh(), 300);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  scrollTriggers.forEach((s) => s.kill());
  if (vantaEffect) vantaEffect.destroy();
});
</script>

<style>
body { margin: 0; }

/* ============ NAVBAR ============ */
.nav-shell {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  padding: 1.5rem 1rem;
  pointer-events: none;
  transition: padding 520ms cubic-bezier(.16,.84,.24,1.06);
}
.nav-shell.is-scrolled { padding: 0.9rem 1rem; }

.nav-inner {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 1.25rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 0;
  background: transparent;
  border: 1px solid transparent;
  transition:
    max-width 600ms cubic-bezier(.16,.84,.24,1.06),
    padding 520ms cubic-bezier(.16,.84,.24,1.06),
    border-radius 520ms cubic-bezier(.16,.84,.24,1.06),
    background 380ms ease,
    border-color 380ms ease,
    box-shadow 380ms ease;
}

.nav-shell.is-scrolled .nav-inner {
  max-width: 820px;
  padding: 0.5rem 0.6rem 0.5rem 1.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: saturate(1.6) blur(22px);
  backdrop-filter: saturate(1.6) blur(22px);
  box-shadow:
    0 18px 40px -20px rgba(15, 49, 110, 0.28),
    0 2px 6px -2px rgba(15, 49, 110, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* Small responsiveness: avoid weird squeeze on mobile */
@media (max-width: 640px) {
  .nav-shell.is-scrolled .nav-inner {
    max-width: calc(100% - 0.5rem);
  }
}

/* left pulse dot */
.nav-pulse {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}
.pulse-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--sky-500);
  box-shadow: 0 0 0 4px rgba(31, 124, 232, 0.22), 0 0 14px 2px rgba(31, 124, 232, 0.55);
  position: relative;
  transition: background 280ms ease, box-shadow 280ms ease;
}
.pulse-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid currentColor;
  opacity: 0.35;
  animation: pulse-ring 2.4s ease-out infinite;
}
.pulse-dot.is-light {
  background: white;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.2), 0 0 14px 3px rgba(255,255,255,0.85);
  color: white;
}
@keyframes pulse-ring {
  0%   { transform: scale(0.6); opacity: 0.6; }
  100% { transform: scale(2.2); opacity: 0; }
}

/* nav links */
.nav-links {
  display: none;
  align-items: center;
  gap: 2rem;
  font-size: 13px;
  letter-spacing: 0.01em;
  font-weight: 500;
}
@media (min-width: 768px) {
  .nav-links { display: flex; }
}
.nav-link {
  color: var(--ink-soft);
  transition: color 250ms ease, transform 250ms ease;
  position: relative;
}
.nav-link.is-light { color: rgba(255, 255, 255, 0.85); }
.nav-link:hover { color: var(--ink); }
.nav-link.is-light:hover { color: white; }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -6px;
  height: 2px;
  border-radius: 1px;
  background: var(--sky-500);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 320ms cubic-bezier(.2,.7,.2,1);
}
.nav-link:hover::after { transform: scaleX(0.6); }

/* lang button */
.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--sky-200);
  background: rgba(255, 255, 255, 0.85);
  color: var(--ink);
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: background 250ms ease, border-color 250ms ease, transform 200ms ease;
}
.lang-btn:hover { background: white; transform: translateY(-1px); }
.lang-btn.is-light {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  color: white;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.lang-btn.is-light:hover { background: rgba(255, 255, 255, 0.2); }

/* Scroll hint line */
.scroll-line {
  display: block;
  width: 1px;
  height: 38px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.7), transparent);
  position: relative;
  overflow: hidden;
}
.scroll-line::after {
  content: "";
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: white;
  animation: scroll-trail 1.8s ease-in-out infinite;
}
@keyframes scroll-trail {
  0%   { top: -50%; }
  100% { top: 100%; }
}
</style>
