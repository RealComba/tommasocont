<template>
  <div class="marquee-container" :aria-label="language === 'it' ? 'Linguaggi e tecnologie' : 'Languages and technologies'">
    <div class="marquee-track">
      <ul v-for="copy in 2" :key="copy" class="marquee-group" :aria-hidden="copy === 2 ? true : undefined">
        <li v-for="item in techLogos" :key="item.name" class="marquee-item">
          <span class="marquee-logo" :style="{ color: item.color }" aria-hidden="true" v-html="item.svg" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { techLogos } from '../data/techLogos';
import { useI18n } from '../i18n';
const { language } = useI18n();
</script>
<style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
  padding-block: 20px;
  border-block: 1px solid rgba(255,255,255,.07);
  background: rgba(2,6,23,.4);
  mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
}
.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-scroll 30s linear infinite;
}
/* Equal groups include their own seam spacing. Half the track is exactly one cycle. */
.marquee-group {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: space-around;
  gap: 32px;
  min-width: 1120px;
  padding-inline: 16px;
  margin: 0;
  list-style: none;
}
.marquee-item { display: flex; flex: none; align-items: center; gap: 12px; color: #dce6f1; font-size: 15px; font-weight: 500; white-space: nowrap; }
.marquee-logo { display: flex; width: 27px; height: 27px; align-items: center; justify-content: center; }
.marquee-logo :deep(svg) { width: 100%; height: 100%; }
@keyframes marquee-scroll {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee-container { mask-image: none; }
  .marquee-track { animation: none; width: 100%; will-change: auto; }
  .marquee-group { min-width: 0; width: 100%; flex-wrap: wrap; gap: 24px; }
  .marquee-group[aria-hidden='true'] { display: none; }
}
</style>
