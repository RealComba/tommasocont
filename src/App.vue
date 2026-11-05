<template>
  <div ref="root" class="portfolio">
    <Background3D />
    <a class="skip-link" href="#main">{{ it ? 'Vai al contenuto' : 'Skip to content' }}</a>
    <header ref="header" class="nav-shell" @keydown.esc="closeMenu(true)" @focusout="onHeaderFocusOut" :class="{ 'is-scrolled': scrolled }">
      <div class="nav-inner">
        <a href="#home" class="wordmark" aria-label="Tommaso Cont — Home">tc<span> /</span></a>
        <nav class="nav-links desktop-nav" :aria-label="it ? 'Navigazione principale' : 'Main navigation'">
          <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="{ active: active === link.id }" :aria-current="active === link.id ? 'location' : undefined">{{ link.label }}</a>
        </nav>
        <div class="nav-actions">
          <div class="language-switch" role="group" :aria-label="it ? 'Lingua' : 'Language'">
            <button v-for="lang in ['it', 'en']" :key="lang" :aria-pressed="language === lang" @click="setLanguage(lang)" :aria-label="lang === 'it' ? 'Italiano' : 'English'">{{ lang.toUpperCase() }}</button>
          </div>
          <button ref="menuButton" class="menu-toggle" :class="{ 'is-open': menuOpen }" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? (it ? 'Chiudi menu' : 'Close menu') : (it ? 'Apri menu' : 'Open menu')" @click="menuOpen = !menuOpen">
            <span aria-hidden="true" /><span aria-hidden="true" />
          </button>
        </div>
          <nav v-if="menuOpen" id="mobile-navigation" class="mobile-navigation" :aria-label="it ? 'Navigazione mobile' : 'Mobile navigation'">
            <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :aria-current="active === link.id ? 'location' : undefined" @click="goToSection(link.id)">{{ link.label }} <span aria-hidden="true">↗</span></a>
          </nav>
      </div>
    </header>
    <main id="main">
      <section id="home" class="hero">
        <div class="hero-content">
          <p class="eyebrow hero-enter">Full Stack Developer · Verona, IT</p>
          <h1 class="hero-name hero-enter">Tommaso<br><span>Cont.</span></h1>
          <div class="hero-bottom hero-enter">
            <p>{{ it ? 'Sviluppo applicazioni web, dall’interfaccia alle API e ai dati.' : 'I build web applications, from interfaces to APIs and data.' }}</p>
            <a class="text-link" href="#projects">{{ it ? 'Esplora i progetti' : 'Explore projects' }} <span aria-hidden="true">↗</span></a>
          </div>
        </div>

      </section>
      <section tabindex="-1" id="about" class="chapter"><AboutMe /></section>
      <section tabindex="-1" id="skills" class="chapter skills-section"><Skills /></section>
      <section tabindex="-1" id="projects" class="chapter"><Projects /></section>
      <section tabindex="-1" id="contact"><Contact /></section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background3D from './components/Background3D.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Project.vue';
import Contact from './components/Contact.vue';
import { useI18n } from './i18n';
const { language, setLanguage } = useI18n();
const it = computed(() => language.value === 'it');
const links = computed(() => [
  { id: 'about', label: it.value ? 'Percorso' : 'About' },
  { id: 'skills', label: it.value ? 'Competenze' : 'Skills' },
  { id: 'projects', label: it.value ? 'Progetti' : 'Projects' },
  { id: 'contact', label: it.value ? 'Contatti' : 'Contact' },
]);
const root = ref(null), scrolled = ref(false), active = ref('');
const menuOpen = ref(false), header = ref(null), menuButton = ref(null);
let media, context, desktopQuery;
const closeMenu = (restoreFocus = false) => {
  if (!menuOpen.value) return;
  menuOpen.value = false;
  if (restoreFocus) menuButton.value?.focus();
};
const goToSection = async (id) => {
  closeMenu();
  await nextTick();
  document.getElementById(id)?.focus({ preventScroll: true });
};
const onOutsidePointer = (event) => { if (!header.value?.contains(event.target)) closeMenu(); };
const onHeaderFocusOut = (event) => { if (event.relatedTarget && !header.value?.contains(event.relatedTarget)) closeMenu(); };
const onDesktopChange = () => {
  if (desktopQuery.matches && menuOpen.value) {
    const restoreFocus = header.value?.contains(document.activeElement);
    closeMenu();
    if (restoreFocus) header.value?.querySelector('.wordmark')?.focus();
  }
};
const onScroll = () => { scrolled.value = window.scrollY > 60; };
watch(language, async () => { await nextTick(); ScrollTrigger.refresh(); });
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('pointerdown', onOutsidePointer);
  desktopQuery = window.matchMedia('(min-width: 1024px)');
  desktopQuery.addEventListener('change', onDesktopChange);
  onScroll();
  context = gsap.context(() => {
    links.value.forEach(({ id }) => ScrollTrigger.create({ trigger: `#${id}`, start: 'top 45%', end: 'bottom 45%', onToggle: self => { if (self.isActive) active.value = id; else if (active.value === id) active.value = ''; } }));
    media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-enter', { y: 50, opacity: 0, duration: 1.15, stagger: 0.14, ease: 'power3.out', clearProps: 'all' });
      gsap.to('.hero-content', { y: -65, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 15%', scrub: 1 } });
      gsap.utils.toArray('[data-reveal]').forEach(el => gsap.from(el, { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: el, start: 'top 93%', once: true } }));
    });
  }, root.value);
  document.fonts.ready.then(() => { if (root.value) ScrollTrigger.refresh(); });
});
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); document.removeEventListener('pointerdown', onOutsidePointer); desktopQuery?.removeEventListener('change', onDesktopChange); media?.revert(); context?.revert(); });
</script>
