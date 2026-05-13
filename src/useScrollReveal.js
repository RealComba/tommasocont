import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Reveal helper: animates elements with the given selector inside `rootGetter`.
 * Each element fades + slides up when scrolled into view, with a small stagger.
 */
export function useScrollReveal(rootGetter, selector = '[data-reveal]', options = {}) {
  let triggers = []

  onMounted(() => {
    const root = typeof rootGetter === 'function' ? rootGetter() : rootGetter?.value
    if (!root) return

    const elements = Array.from(root.querySelectorAll(selector))
    elements.forEach((el) => {
      const delay = parseFloat(el.dataset.revealDelay || '0')
      const yFrom = parseFloat(el.dataset.revealY || '40')
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: yFrom },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          ease: options.ease ?? 'power3.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      )
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    })
  })

  onBeforeUnmount(() => {
    triggers.forEach((t) => t.kill())
    triggers = []
  })
}
