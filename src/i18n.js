import { ref, computed } from 'vue';

const currentLanguage = ref(localStorage.getItem('language') || 'it');

export const translations = {
  it: {
    // Hero section
    heroTitle: 'Tommaso Cont!',
    heroSubtitle: 'Frontend Developer creating awesome web experiences',
    
    // About Me
    aboutMeTitle: 'Il mio',
    aboutMeHighlight: 'Percorso',
    aboutMeDescription: 'La mia passione per lo sviluppo web è iniziata dal percorso presso il Lorgna-Pindemonte, dove ho avuto modo di approcciarmi con le prime interfacce web, proseguendo poi il mio percorso presso ITS Last.',
    whoAmI: 'Chi Sono?',
    whoAmIDescription: 'Sono uno studente del corso Web Developer presso ITS LAST, con l\'obiettivo di diventare una figura Front-End, alla ricerca di un\'esperienza di stage per ampliare le mie consocenze.',
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
    heroSubtitle: 'Frontend Developer creating awesome web experiences',
    
    // About Me
    aboutMeTitle: 'My',
    aboutMeHighlight: 'Journey',
    aboutMeDescription: 'My passion for web development started at Lorgna-Pindemonte, where I first approached web interfaces, and continued at ITS Last.',
    whoAmI: 'Who Am I?',
    whoAmIDescription: 'I am a Web Developer student at ITS LAST, aiming to become a Front-End developer, and I\'m looking for an internship to expand my knowledge.',
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
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
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
