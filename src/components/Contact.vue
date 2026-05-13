<template>
  <footer ref="footerEl" class="relative bg-[var(--ink)] text-white overflow-hidden">
    <!-- soft glow, animated via GSAP -->
    <div ref="glowA" class="pointer-events-none absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-[var(--sky-500)] opacity-25 blur-3xl"></div>
    <div ref="glowB" class="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--sky-700)] opacity-30 blur-3xl"></div>

    <!-- subtle grain dot pattern -->
    <div class="absolute inset-0 opacity-[0.06] pointer-events-none footer-dots"></div>

    <!-- =========== CTA =========== -->
    <div class="relative max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-12">
      <div class="flex flex-col gap-6 max-w-3xl">
        <h2 ref="titleEl" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
          <span class="word-wrap"><span class="word">{{ language === 'it' ? 'Lavoriamo' : "Let's" }}</span></span>
          <span class="word-wrap"><span class="word" v-if="language !== 'it'">build</span></span>
          <span class="word-wrap"><span class="word text-[var(--sky-300)]">{{ language === 'it' ? 'insieme.' : 'together.' }}</span></span>
        </h2>
        <p class="max-w-xl text-white/70 text-base md:text-lg leading-relaxed" data-reveal data-reveal-delay="0.1">
          {{ language === 'it'
            ? 'Hai un progetto, un\'idea o un\'opportunità di stage? Scrivimi.'
            : 'Got a project, an idea or an internship opportunity? Get in touch.' }}
        </p>
        <a href="mailto:tommaso.cont2004@gmail.com"
           class="cta-mail group" data-reveal data-reveal-delay="0.15">
          <span class="cta-mail-text">tommaso.cont2004@gmail.com</span>
          <span class="cta-mail-arrow">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
    </div>

    <!-- =========== MARQUEE strip =========== -->
    <div class="marquee" aria-hidden="true">
      <div ref="marqueeTrack" class="marquee-track">
        <span v-for="n in 8" :key="n" class="marquee-item">
          {{ language === 'it' ? 'Disponibile per stage' : 'Available for internship' }}
          <span class="marquee-dot">✦</span>
          Verona · Italia
          <span class="marquee-dot">✦</span>
          tommaso.cont2004@gmail.com
          <span class="marquee-dot">✦</span>
        </span>
      </div>
    </div>

    <!-- =========== columns =========== -->
    <div class="relative max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10">
      <div class="col-span-2 md:col-span-2" data-reveal>
        <p class="text-base font-semibold tracking-tight">Tommaso Cont</p>
        <p class="text-white/60 text-sm mt-2 max-w-xs leading-relaxed">
          Frontend Developer · Verona, IT
        </p>
      </div>

      <div data-reveal data-reveal-delay="0.05">
        <p class="footer-heading">{{ language === 'it' ? 'Sitemap' : 'Sitemap' }}</p>
        <ul class="space-y-2 text-sm">
          <li><a href="#about"    class="footer-link">{{ language === 'it' ? 'Chi sono' : 'About' }}</a></li>
          <li><a href="#skills"   class="footer-link">{{ language === 'it' ? 'Competenze' : 'Skills' }}</a></li>
          <li><a href="#projects" class="footer-link">{{ language === 'it' ? 'Progetti' : 'Projects' }}</a></li>
        </ul>
      </div>

      <div data-reveal data-reveal-delay="0.1">
        <p class="footer-heading">{{ language === 'it' ? 'Social' : 'Social' }}</p>
        <div ref="socialEl" class="flex gap-2">
          <a href="https://www.linkedin.com/in/tommaso-cont-5b7488348/" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
          <a href="https://github.com/RealComba" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z"/></svg>
          </a>
          <a href="mailto:tommaso.cont2004@gmail.com" class="social-btn" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6.5L12 12l9-5.5V18a2 2 0 01-2 2H5a2 2 0 01-2-2V6.5zM21 5H3v.4l9 5.5 9-5.5V5z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- =========== bottom bar =========== -->
    <div class="relative max-w-6xl mx-auto px-6 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/55">
      <p>&copy; 2026 Tommaso Cont</p>
      <a href="#" class="back-top group">
        <span>{{ language === 'it' ? 'Torna su' : 'Back to top' }}</span>
        <span class="back-top-arrow">↑</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../i18n';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { language } = useI18n();

const footerEl = ref(null);
const titleEl = ref(null);
const glowA = ref(null);
const glowB = ref(null);
const marqueeTrack = ref(null);
const socialEl = ref(null);

const scrollTriggers = [];
const tweens = [];

onMounted(() => {
  // ===== Title: word reveal on enter =====
  if (titleEl.value) {
    const words = titleEl.value.querySelectorAll('.word');
    const tw = gsap.fromTo(words,
      { y: '110%', opacity: 0, rotate: 4 },
      {
        y: '0%', opacity: 1, rotate: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: titleEl.value,
          start: 'top 85%',
          once: true,
        }
      });
    if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
  }

  // ===== Glow drift =====
  if (glowA.value) {
    const t1 = gsap.to(glowA.value, {
      x: -40, y: 30,
      duration: 8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
    tweens.push(t1);
  }
  if (glowB.value) {
    const t2 = gsap.to(glowB.value, {
      x: 50, y: -20,
      duration: 10,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
    tweens.push(t2);
  }

  // ===== Marquee: infinite loop =====
  if (marqueeTrack.value) {
    const distance = marqueeTrack.value.scrollWidth / 2;
    const mq = gsap.to(marqueeTrack.value, {
      x: -distance,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
    tweens.push(mq);
  }

  // ===== Social buttons: stagger on scroll =====
  if (socialEl.value) {
    const btns = socialEl.value.querySelectorAll('.social-btn');
    const tw = gsap.fromTo(btns,
      { y: 20, opacity: 0, scale: 0.85 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.7,
        ease: 'back.out(2)',
        stagger: 0.08,
        scrollTrigger: {
          trigger: socialEl.value,
          start: 'top 90%',
          once: true,
        }
      });
    if (tw.scrollTrigger) scrollTriggers.push(tw.scrollTrigger);
  }
});

onBeforeUnmount(() => {
  scrollTriggers.forEach(s => s.kill());
  tweens.forEach(t => t.kill());
});
</script>

<style scoped>
/* ===== Title word reveal ===== */
.word-wrap {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  line-height: 1.02;
  padding-bottom: 0.05em;
  margin-right: 0.18em;
}
.word {
  display: inline-block;
  will-change: transform, opacity;
}

/* ===== CTA mail ===== */
.cta-mail {
  display: inline-flex;
  align-items: center;
  gap: 0;
  align-self: flex-start;
  margin-top: 0.5rem;
  background: white;
  color: var(--ink);
  font-weight: 500;
  border-radius: 999px;
  padding: 0;
  overflow: hidden;
  transition: background 320ms ease;
}
.cta-mail:hover { background: var(--sky-300); }
.cta-mail-text {
  padding: 0.85rem 0.5rem 0.85rem 1.4rem;
}
.cta-mail-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0.3rem 0.3rem 0.3rem 0;
  border-radius: 999px;
  background: var(--ink);
  color: white;
  transition: transform 380ms cubic-bezier(.16,.84,.24,1.06), background 320ms ease;
}
.cta-mail:hover .cta-mail-arrow {
  transform: rotate(-45deg);
  background: var(--sky-700);
}

/* ===== Marquee ===== */
.marquee {
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  white-space: nowrap;
  padding: 1.2rem 0;
  position: relative;
}
.marquee-track {
  display: inline-flex;
  gap: 2.5rem;
  will-change: transform;
}
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  font-weight: 500;
  white-space: nowrap;
  padding-right: 2.5rem;
}
.marquee-dot {
  color: var(--sky-300);
  font-size: 12px;
}

/* ===== Dot pattern ===== */
.footer-dots {
  background-image: radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px);
  background-size: 22px 22px;
}

/* ===== Footer columns ===== */
.footer-heading {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 0.95rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.footer-link {
  color: rgba(255, 255, 255, 0.65);
  transition: color 200ms ease, transform 240ms ease;
  display: inline-block;
}
.footer-link:hover {
  color: white;
  transform: translateX(3px);
}
.social-btn {
  width: 42px; height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  display: inline-flex; align-items: center; justify-content: center;
  color: rgba(255, 255, 255, 0.85);
  transition: all 280ms cubic-bezier(.16,.84,.24,1.06);
}
.social-btn svg { width: 16px; height: 16px; }
.social-btn:hover {
  background: var(--sky-300);
  color: var(--ink);
  border-color: var(--sky-300);
  transform: translateY(-3px) rotate(-4deg);
}

/* ===== Back to top ===== */
.back-top {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: color 200ms ease;
}
.back-top:hover { color: white; }
.back-top-arrow {
  display: inline-block;
  transition: transform 360ms cubic-bezier(.16,.84,.24,1.06);
}
.back-top:hover .back-top-arrow {
  transform: translateY(-4px);
}
</style>
