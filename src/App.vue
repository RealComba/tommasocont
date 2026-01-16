<template>
  <div class="overflow-hidden">
  <div class="relative min-h-screen">
    <div ref="vantaRef" class="absolute inset-0 w-full h-full z-0 overflow-x-hidden"></div>

    <!-- Language Button -->
    <button
      @click="toggleLanguage"
      class="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center shadow-lg transition duration-300 transform hover:scale-110"
      :title="language === 'it' ? 'Switch to English' : 'Cambia a Italiano'"
    >
      {{ language === 'it' ? '🇬🇧' : '🇮🇹' }}
    </button>

    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-white">
      <SplitText
        :text="t('heroTitle')"
        class-name="text-4xl sm:text-5xl md:text-7xl font-semibold text-center"
        :delay="50"
        :duration="0.5"
        ease="power3.out"
        split-type="chars"
        :from="{ opacity: 0, y: 40 }"
        :to="{ opacity: 1, y: 0 }"
        :threshold="0.1"
        root-margin="-100px"
        text-align="center"
      />
      <p class="text-md sm:text-lg md:text-xl text-center mt-4" data-aos="fade-up" data-aos-duration="3000">
        {{ t('heroSubtitle') }}
      </p>
    </div>
  </div>
  <div class="info flex flex-col items-center mt-20 mb-10 ">
  <AboutMe />
  </div>
  <div class="flex ">
    <Skills></Skills>
  </div>
  <Projects></Projects>
  <Conact></Conact>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "./components/AboutMe.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
import SplitText from "./components/Title.vue";
import CLOUDS from "vanta/dist/vanta.clouds.min"; // <-- default import
import * as THREE from "three";
import Skills from "./components/Skills.vue"
import Projects from "./components/Project.vue"
import { useI18n } from "./i18n";
import Conact from "./components/Contact.vue";

const { language, t, toggleLanguage } = useI18n();

const vantaRef = ref<HTMLElement | null>(null);
let vantaEffect: any = null;

onMounted(() => {
    if (!vantaRef.value) return;
    vantaEffect = CLOUDS({
      el: vantaRef.value,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
    });
  });

  onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy();
  });
</script>

<style scoped>
/* Facoltativo: colore di fallback */

</style>

<style>
/* Global: rimuovi margini di default */
body {
  margin: 0;
}
</style>