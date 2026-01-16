<template>

<div class="sm:h-[35vh] h-[30vh] w-full flex flex-col items-center gap-10 bg-blue-700" data-aos="" data-aos-duration="800">
    <div class="flex flex-row justify-between w-[100%] sm:w-[80%] px-4 sm:px-0 mt-10">
        <div class="flex flex-col">
            <p class="sm:text-4xl text-2xl text-white-500 font-semibold mb-5">Tommaso Cont</p>
            <p class="sm:text-lg text-md text-white-500">Frontend Developer</p>
        </div>
        <div class="flex flex-col social-icons gap-4">
            <p class="sm:text-lg text-md text-white-500">+39 345 481 5672</p>
            <div class="flex flex-row gap-4">
                <button @click="openLink('https://www.linkedin.com/in/tommaso-cont-5b7488348/')" class="text-white-600 font-semibold flex items-center gap-2">
                    <svg class="sm:w-10 sm:h-10 w-8 h-8 hover:fill-blue-500 hover:bg-white rounded-md hover:scale-120 transition delay-30 duration-300 ease-in-out" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </button>
                <button @click="openLink('https://github.com/RealComba')" class="text-white-600 font-semibold flex items-center gap-2">
                    <svg class="sm:w-10 sm:h-10 w-8 h-8 hover:fill-purple-500 hover:bg-white rounded-full hover:scale-120 transition delay-30 duration-300 ease-in-out" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </button>
                <button @click="openLink('mailto:tommaso.cont@example.com')" class="text-white-600 font-semibold flex items-center gap-2">
                    <svg class="sm:w-10 sm:h-10 w-8 h-8 hover:fill-purple-500 hover:scale-130 transition delay-30 duration-300 ease-in-out" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="fff" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="#fff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                </button>
            </div>  
        </div>
    </div>
    <p class="sm:pt-0 text-xs sm:text-sm text-white">© 2026 Tommaso Cont </p>

</div>

</template>

<script setup>
const openLink = (url) => {
    window.open(url, '_blank');
};
</script>
