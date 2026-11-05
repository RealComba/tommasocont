import { ref, computed } from 'vue';

let savedLanguage;
try { savedLanguage = localStorage.getItem('language'); } catch {}
const currentLanguage = ref(savedLanguage === 'en' ? 'en' : 'it');
document.documentElement.lang = currentLanguage.value;

export const translations = {
  it: {
    // Hero section
    heroTitle: 'Tommaso Cont!',
    heroSubtitle: 'Full Stack Developer',
    
    // About Me
    aboutMeTitle: 'Il mio',
    aboutMeHighlight: 'Percorso',
    aboutMeDescription: 'Mi sono avvicinato allo sviluppo web durante le superiori, imparando a creare le mie prime interfacce. Ho completato la mia formazione come Web Developer all\'ITS LAST.',
    whoAmI: 'Chi Sono?',
    whoAmIDescription: 'Ho completato la mia formazione in sviluppo web all\'ITS LAST come Full Stack Developer, e ora sono alla ricerca di nuove opportunità lavorative per mettermi alla prova sul campo.',
    downloadCV: 'Scarica il CV',
    
    // Skills
    skillsTitle: 'Le mie',
    skillsHighlight: 'Competenze',
    
    // Projects
    projectsTitle: 'I miei',
    projectsHighlight: 'Progetti',
    seeOnGithub: 'Vedi su GitHub',
    
    // Project descriptions
    projects: {
      streaming: {
        title: 'Sito Streaming',
        description: 'Sito personale per vedere trailer di film e serie tv.'
      },
      budgetManager: {
        title: 'Budget Manager',
        description: 'Webapp per la gestione del budget personale con grafici interattivi.'
      },
      mapIterative: {
        title: 'Mappa Iterativa',
        description: 'Mappa interattiva che mostra un elenco di servizi in una determinata area geografica.'
      }
    }
  },
  en: {
    // Hero section
    heroTitle: 'Tommaso Cont!',
    heroSubtitle: 'Full Stack Developer',
    
    // About Me
    aboutMeTitle: 'My',
    aboutMeHighlight: 'Journey',
    aboutMeDescription: 'My interest in web development began in high school, where I learned to create my first interfaces. I have completed my training as a Web Developer at ITS LAST.',
    whoAmI: 'Who Am I?',
    whoAmIDescription: 'I completed my training in web development at ITS LAST as a Full Stack Developer, and I am now seeking new career opportunities to apply my skills in the field.',
    downloadCV: 'Download CV',
    
    // Skills
    skillsTitle: 'My',
    skillsHighlight: 'Skills',
    
    // Projects
    projectsTitle: 'My',
    projectsHighlight: 'Projects',
    seeOnGithub: 'View on GitHub',
    
    // Project descriptions
    projects: {
      streaming: {
        title: 'Streaming Website',
        description: 'Personal website to watch movies and TV series trailers.'
      },
      budgetManager: {
        title: 'Budget Manager',
        description: 'Web app for managing personal budget with interactive charts.'
      },
      mapIterative: {
        title: 'Interactive Map',
        description: 'Interactive map showing a list of services in a specific geographic area.'
      }
    }
  }
};

export const useI18n = () => {
  const language = currentLanguage;
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language.value];
    for (const k of keys) {
      value = value[k];
    }
    return value || key;
  };
  
  const setLanguage = (lang) => {
    if (!['it', 'en'].includes(lang)) return;
    currentLanguage.value = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('language', lang); } catch {}
  };
  
  const toggleLanguage = () => {
    setLanguage(language.value === 'it' ? 'en' : 'it');
  };
  
  return {
    language,
    t,
    setLanguage,
    toggleLanguage
  };
};
