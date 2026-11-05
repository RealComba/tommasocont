<template>
  <div class="section-wrap">

    <div class="skills-intro" data-reveal>
      <h2 class="display-title">{{ it ? 'Dall’interfaccia' : 'From interface' }}<br><span class="muted">{{ it ? 'al database.' : 'to database.' }}</span></h2>
      <p>{{ it ? 'Il mio approccio è full stack: capire come interfaccia, logica e dati lavorano insieme per costruire un’applicazione completa.' : 'My approach is full stack: understanding how interfaces, logic and data work together to build a complete application.' }}</p>
    </div>
    <div class="skills-marquee" data-reveal><Marquee /></div>
    <div class="fullstack-grid" data-reveal>
      <article v-for="skill in skills" :key="skill.titleEn" class="fullstack-card" @pointermove="onCardPointerMove" :style="{ '--skill-color': skill.color }">
        <div class="fullstack-icon" aria-hidden="true" v-html="skill.iconSvg" />
        <h3>{{ it ? skill.titleIt : skill.titleEn }}</h3>
        <p class="skill-tools">{{ skill.tools }}</p>
        <p>{{ it ? skill.descIt : skill.descEn }}</p>
      </article>
    </div>

  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';
import Marquee from './Marquee.vue';
const { language } = useI18n();
const it = computed(() => language.value === 'it');
const onCardPointerMove = (event) => {
  if (event.pointerType === 'touch') return;
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
  card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
};
const skills = [
  {
    "titleIt": "Interfacce web",
    "titleEn": "Web interfaces",
    "tools": "React, Next.js, Vue.js",
    "descIt": "Componenti, navigazione e gestione dello stato per collegare le interfacce ai dati.",
    "descEn": "Components, navigation and state management to connect interfaces to data.",
    "color": "#06b6d4",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"3.8\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"3.8\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"3.8\" transform=\"rotate(120 12 12)\"/></svg>"
  },
  {
    "titleIt": "Backend e API",
    "titleEn": "Backend & APIs",
    "tools": "Node.js, Express, REST API",
    "descIt": "Endpoint, autenticazione e logica applicativa: la parte che collega le richieste dell’utente al database.",
    "descEn": "Endpoints, authentication and application logic: connecting user requests to the database.",
    "color": "#22c55e",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\"><path d=\"M12 1.6c-.3 0-.5.07-.7.2L3 6.5c-.4.25-.7.7-.7 1.2v9c0 .5.3.95.7 1.2l2.1 1.2c1 .5 1.4.5 1.8.5 1.4 0 2.2-.85 2.2-2.3V8.4c0-.1-.1-.2-.2-.2H8c-.1 0-.2.1-.2.2v8.6c0 .65-.7 1.3-1.8.75L3.8 16.6c-.07-.04-.1-.12-.1-.2v-9c0-.08.03-.16.1-.2l8.1-4.65c.06-.04.14-.04.2 0l8.1 4.65c.07.04.1.12.1.2v9c0 .08-.04.16-.1.2L12.1 21.25c-.06.04-.14.04-.2 0L9.84 20c-.06-.04-.14-.04-.2 0-.5.3-.6.36-1.1.5-.1.04-.27.1.05.3l2.7 1.6c.3.16.6.25.9.25.3 0 .6-.09.9-.25l8.1-4.65c.4-.25.7-.7.7-1.2v-9c0-.5-.3-.95-.7-1.2L12.7 1.8c-.2-.13-.4-.2-.7-.2z\"/></svg>"
  },
  {
    "titleIt": "Gestione dei dati",
    "titleEn": "Data management",
    "tools": "PostgreSQL, MongoDB",
    "descIt": "Modelli di dati, relazioni e query per organizzare le informazioni e renderle disponibili all’applicazione.",
    "descEn": "Data models, relationships and queries to organise information and make it available to the application.",
    "color": "#38bdf8",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/></svg>"
  },
  {
    "titleIt": "Logica e tipi",
    "titleEn": "Logic & types",
    "tools": "JavaScript, TypeScript",
    "descIt": "Funzioni, tipi e strutture condivise per gestire i dati tra frontend e backend.",
    "descEn": "Functions, types and shared structures to handle data across the frontend and backend.",
    "color": "#3178c6",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\"/></svg>"
  },
  {
    "titleIt": "Layout responsive",
    "titleEn": "Responsive layouts",
    "tools": "HTML, CSS, Tailwind CSS",
    "descIt": "Interfacce che si adattano a schermi diversi, con attenzione a spaziature, leggibilità e interazioni.",
    "descEn": "Interfaces that adapt to different screens, with care for spacing, readability and interactions.",
    "color": "#38bdf8",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"currentColor\"><path d=\"M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2.1-2.2-4.6-2.2z\"/></svg>"
  },
  {
    "titleIt": "Integrazioni",
    "titleEn": "Integrations",
    "tools": "n8n, API",
    "descIt": "Collegamenti tra servizi e automazione di attività ripetitive attraverso flussi di dati.",
    "descEn": "Connections between services and automation of repetitive tasks through data workflows.",
    "color": "#f97316",
    "iconSvg": "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>"
  }
];
</script>
