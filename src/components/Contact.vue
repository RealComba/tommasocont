<template>
  <footer class="contact-footer">
    <div class="section-wrap">

      <div class="contact-layout" data-reveal>
        <div>
          <h2 class="display-title">{{ it ? 'Hai un progetto' : 'Have a project' }}<br><span class="muted">{{ it ? 'in mente?' : 'in mind?' }}</span></h2>
          <p class="contact-copy">{{ it ? 'Cerco opportunità come Junior Full Stack Developer. Se vuoi parlare di un progetto o conoscere meglio il mio percorso, scrivimi.' : 'I’m looking for opportunities as a Junior Full Stack Developer. If you’d like to discuss a project or learn more about my background, get in touch.' }}</p>
        </div>
        <div class="contact-details">
          <a class="contact-mail" :href="`mailto:${email}`">{{ email }} <span aria-hidden="true">↗</span></a>
          <div class="contact-actions"><a class="contact-primary" :href="`mailto:${email}`">{{ it ? 'Scrivimi' : 'Email me' }} <span aria-hidden="true">↗</span></a><button class="text-link" @click="copyEmail">{{ copyState === 'copied' ? (it ? 'Email copiata' : 'Email copied') : (it ? 'Copia email' : 'Copy email') }}</button></div>
          <p class="copy-feedback" role="status">{{ copyState === 'error' ? (it ? 'Seleziona l’indirizzo qui sopra per copiarlo.' : 'Select the address above to copy it.') : copyState === 'copied' ? (it ? 'Indirizzo copiato negli appunti.' : 'Address copied to clipboard.') : '' }}</p>
          <div class="contact-socials"><a href="https://github.com/RealComba" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tommaso-cont-5b7488348/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="tel:+393454815672">{{ it ? 'Telefono' : 'Phone' }} ↗</a></div>
        </div>
      </div>
      <div class="footer-bottom"><p>© {{ new Date().getFullYear() }} Tommaso Cont</p><p>Full Stack Developer · Verona, {{ it ? 'Italia' : 'Italy' }}</p></div>
    </div>
  </footer>
</template>
<script setup>
import { computed, ref, onBeforeUnmount } from 'vue';
import { useI18n } from '../i18n';
const { language } = useI18n();
const it = computed(() => language.value === 'it');
const email = 'tommaso.cont2004@gmail.com';
const copyState = ref('');
let resetTimer;
let disposed = false;
async function copyEmail() {
  clearTimeout(resetTimer);
  try {
    await navigator.clipboard.writeText(email);
    if (!disposed) copyState.value = 'copied';
  } catch {
    if (!disposed) copyState.value = 'error';
  }
  if (!disposed) resetTimer = setTimeout(() => { copyState.value = ''; }, 5000);
}
onBeforeUnmount(() => { disposed = true; clearTimeout(resetTimer); });
</script>
