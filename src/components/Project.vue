<template>
	<section class="w-full h-auto mt-5 py-8 md:py-12">
		<div class="flex flex-row items-center md:flex-row gap-2 md:gap-3 md:items-baseline justify-center px-4 md:px-6" data-aos="fade-up" data-aos-duration="800">
			<p class="text-3xl md:text-4xl lg:text-5xl  font-bold text-black">{{ t('projectsTitle') }}</p>
			<span class="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">{{ t('projectsHighlight') }}</span>
		</div>
		<div class="card w-full mt-8 md:mt-10 flex flex-col lg:flex-row gap-8 sm:gap-4 md:gap-6 lg:gap-8 px-8 sm:px-6 md:px-8 lg:px-10 items-stretch justify-center flex-wrap" data-aos="fade-up" data-aos-duration="1000">
			<div v-for="(project, index) in projectsList" 
			class="bg-gray-100 rounded-xl h-full min-h-[420px] w-full sm:w-[65%] md:w-[50%] lg:w-[28%] shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col"
			:key="project.title">
				<img class="rounded-t-xl h-40 sm:h-44 md:h-48 w-full object-cover" :src="project.image" alt="">
				<div class="text px-4 md:px-6 py-4 md:py-5 flex-1 flex flex-col">
					<p class="text-black font-semibold text-base md:text-lg">{{ project.title }}</p>
					<p class="text-gray-700 text-sm md:text-base mt-2">{{ project.description }}</p>
					<div class="flex flex-row pb-3 md:pb-4 pt-3 md:pt-4 flex-wrap gap-2">
						<span v-for="technology in project.technologies" :key="technology" class="bg-blue-200 text-blue-800 text-xs md:text-sm font-medium px-2.5 py-1.5 rounded-full">{{ technology }}</span>
					</div>
					<button @click="openGithub(project.githubUrl)" class="flex flex-row bg-blue-500 gap-2 rounded-xl px-4 py-2 md:py-2.5 text-white font-semibold text-sm md:text-base hover:bg-blue-600 transition self-start mt-auto">{{ t('seeOnGithub') }} <svg width="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></button>
				</div>
			</div>
		</div>
	</section>
  
</template>

<script setup>
import img1 from '/Users/cont2/Documents/GitHub/Portfolio/src/assets/image.png';
import img2 from '/Users/cont2/Documents/GitHub/Portfolio/src/assets/Screenshot 2026-01-14 alle 14.42.12.png'
import img3 from '/Users/cont2/Documents/GitHub/Portfolio/src/assets/Screenshot 2026-01-14 alle 14.56.01.png'
import { useI18n } from '../i18n';
import { computed } from 'vue';

const { t, language } = useI18n();

const openGithub = (url) => {
	window.open(url, '_blank', 'noopener,noreferrer');
};

const placeholder =
	'data:image/svg+xml;charset=UTF-8,' +
	encodeURIComponent(`
		<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
			<rect width="100%" height="100%" fill="#e5e7eb"/>
			<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-size="24" font-family="Arial, Helvetica, sans-serif">Anteprima progetto</text>
		</svg>
	`);

const baseProjects = [
	{
		title: 'Sito Streaming',
		titleEn: 'Streaming Website',
		description: 'Sito personale per vedere trailer di film e serie tv da YouTube.',
		descriptionEn: 'Personal website to watch movies and TV series trailers from YouTube.',
		image: img1,
		technologies: ['React', 'Tailwind', 'JavaScript'],
		githubUrl: 'https://github.com/RealComba/react-movie.git',
	},
	{
		title: 'Budget Manager',
		titleEn: 'Budget Manager',
		description: 'Webapp per la gestione del budget personale con grafici interattivi.',
		descriptionEn: 'Web app for managing personal budget with interactive charts.',
		image: img2,
		technologies: ['Vue.js', 'Tailwind', 'JavaScript', 'Chart.js'],
		githubUrl: 'https://github.com/RealComba/vue-budget',
	},
	{
		title: 'Mappa Iterativa',
		titleEn: 'Interactive Map',
		description: 'Mappa interattiva che mostra un elenco di servizi in una determinata area geografica.',
		descriptionEn: 'Interactive map showing a list of services in a specific geographic area.',
		image: img3,
		technologies: ['Vue.js', 'Tailwind', 'JavaScript'],
		githubUrl: 'https://github.com/RealComba/Interactive-Europe-Map',
	},
];

const projectsList = computed(() => {
	return baseProjects.map(p => ({
		...p,
		title: language.value === 'it' ? p.title : p.titleEn,
		description: language.value === 'it' ? p.description : p.descriptionEn
	}));
});
</script>

<style scoped>
article:hover img {
	transform: scale(1.02);
}

img {
	transition: transform 200ms ease;
}
</style>
