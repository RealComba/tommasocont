import { createApp } from 'vue'
import AOS from "aos";
import "aos/dist/aos.css";
import './style.css'
import App from './App.vue'

AOS.init();
createApp(App).mount('#app')
