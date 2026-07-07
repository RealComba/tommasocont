import { ref, computed } from 'vue';

const currentLanguage = ref(localStorage.getItem('language') || 'it');

export const translations = {
  it: {
    // Hero section
    heroTitle: 'Tommaso Cont!',
    heroSubtitle: 'Frontend Developer',
    
    // About Me
    aboutMeTitle: 'Il mio',
    aboutMeHighlight: 'Percorso',
    aboutMeDescription: 'Mi sono avvicinato allo sviluppo web durante le superiori, imparando a creare le mie prime interfacce. Ora sto completando la mia formazione come Web Developer all\'ITS LAST.',
    whoAmI: 'Chi Sono?',
    whoAmIDescription: 'Studio sviluppo web all\'ITS LAST. Mi sto specializzando nel front-end e cerco uno stage curriculare per mettermi alla prova sul campo.',
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
    heroSubtitle: 'Frontend Developer',
    
    // About Me
    aboutMeTitle: 'My',
    aboutMeHighlight: 'Journey',
    aboutMeDescription: 'My interest in web development began in high school, where I learned to create my first interfaces. I am now completing my training as a Web Developer at ITS LAST.',
    whoAmI: 'Who Am I?',
    whoAmIDescription: 'I study web development at ITS LAST. I am specializing in front-end and looking for a curricular internship to test my skills in the field.',
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
