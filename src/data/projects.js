import img1 from '../assets/image.png';
import img2 from '../assets/Screenshot 2026-01-14 alle 14.42.12.png';
import img3 from '../assets/Screenshot 2026-01-14 alle 14.56.01.png';
import imgErasmus from '../assets/erasmusmeet.png';

export const projects = [
  {
    title: 'ErasmusMeet',
    titleEn: 'ErasmusMeet',
    year: '2026',
    description: 'Social network full stack per studenti Erasmus per connettersi e incontrarsi, con profili, feed e chat.',
    descriptionEn: 'Full stack social network for Erasmus students to connect and meet, with profiles, feed, and chat.',
    image: imgErasmus,
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/RealComba',
    liveUrl: 'https://erasmus-meet.vercel.app/',
    linkText: 'Visita',
    linkTextEn: 'Visit',
  },
  {
    title: 'Sito Streaming',
    titleEn: 'Streaming Website',
    year: '2025',
    description: 'Un catalogo di film e serie TV con trailer e dati forniti da TMDB.',
    descriptionEn: 'A catalogue of movies and TV shows with trailers and data from TMDB.',
    image: img1,
    technologies: ['React', 'Tailwind', 'JavaScript', 'TMDB API'],
    githubUrl: 'https://github.com/RealComba/react-movie.git',
  },
  {
    title: 'Budget Manager',
    titleEn: 'Budget Manager',
    year: '2025',
    description: 'Un’app per tenere traccia di entrate e spese, organizzarle per categoria e visualizzarle con grafici.',
    descriptionEn: 'An app to track income and expenses, organise them by category and visualise them with charts.',
    image: img2,
    technologies: ['Vue.js', 'Tailwind', 'Chart.js', 'Local Storage'],
    githubUrl: 'https://github.com/RealComba/vue-budget',
  },
  {
    title: 'Mappa Interattiva Europea',
    titleEn: 'Interactive European Map',
    year: '2026',
    description: 'Una mappa per esplorare servizi e punti di interesse, filtrandoli per area geografica.',
    descriptionEn: 'A map for exploring services and points of interest, filtered by geographic area.',
    image: img3,
    technologies: ['Vue.js', 'Tailwind', 'Leaflet', 'GeoJSON'],
    githubUrl: 'https://github.com/RealComba/Interactive-Europe-Map',
  },
];

