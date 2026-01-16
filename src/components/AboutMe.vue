<template>
    <div class="flex flex-row gap-2">
        <p class="text-4xl font-bold text-black"  data-aos="fade-up" data-aos-duration="1000">{{ t('aboutMeTitle') }}</p><span  data-aos="fade-up" data-aos-duration="1000" class="text-4xl font-bold text-blue-600">{{ t('aboutMeHighlight') }}</span>
    </div>
    <p class="mt-5 text-gray-700 text-lg px-10 md:w-200 text-center mt-5 mb-5"  data-aos="fade-up" data-aos-duration="1000">{{ t('aboutMeDescription') }}</p>
    <div class="flex flex-row info-data items-center gap-15 mx-20 md:px-10 mt-10 mb-20">
        <div class="md:w-1/4 mb-10 md:mb-0 aos-init aos-animate box">
            <img data-aos="fade-right" data-aos-duration="1000" src="/Users/cont2/Pictures/Photos Library.photoslibrary/resources/derivatives/2/2B58BBBA-343D-4345-8D23-52322B01A587_1_105_c.jpeg" alt="Profile" class="rounded-lg shadow-xl mx-auto w-1/2 md:w-full">
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col gap-3 flex-1 items-center md:items-start">
            <p class="text-black text-4xl font-bold text-center md:text-start md:text-2xl">{{ t('whoAmI') }}</p>
            <p class="mt-2 text-gray-700 text-center md:text-start">{{ t('whoAmIDescription') }}</p>
            <div class="flex md:flex-row flex-col gap-3 justify-between mt-4 md:ml-0">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-row items-center gap-3">
                        <svg class="w-11 bg-blue-200 p-2 rounded-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#709bff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                        <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#709bff"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#709bff"></path> </g></svg>
                        <p class="text-gray-700 text-lg">Tommaso Cont</p>
                    </div>
                    <div class="flex flex-row items-center gap-3">
                        <svg class="w-11 bg-blue-200 p-1 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#709bff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#709bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#709bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p class="text-gray-700 text-lg">Verona, Italia</p>
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex flex-row items-center gap-3">
                        <svg class="w-11 bg-blue-200 p-1 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#709bff"></path> </g></svg>
                        <p class="text-gray-700 text-lg">tommaso.cont2004@gmail.com</p>
                    </div>
                    <div class="flex flex-row items-center gap-3">
                        <svg class="w-11 p-1 bg-blue-200 rounded-full" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="6.5" y="3" width="12" height="18" rx="3" stroke="#709bff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M12.5 18.5C12.3665 18.5 12.2409 18.448 12.1465 18.3536C12.052 18.2591 12 18.1336 12 18C12 17.9008 12.0291 17.8047 12.0843 17.7222C12.1394 17.6397 12.217 17.576 12.3086 17.5381C12.3696 17.5128 12.434 17.5 12.5 17.5C12.5327 17.5 12.5655 17.5032 12.5975 17.5096C12.6949 17.529 12.7834 17.5763 12.8536 17.6464C12.9237 17.7166 12.971 17.8051 12.9904 17.9025C13.0098 17.9998 12.9999 18.0997 12.9619 18.1913C12.924 18.283 12.8603 18.3606 12.7778 18.4157C12.6953 18.4709 12.5992 18.5 12.5 18.5Z" fill="#709bff"></path> <path d="M12.5 19C12.2348 19 11.9804 18.8946 11.7929 18.7071C11.6054 18.5196 11.5 18.2652 11.5 18C11.5 17.8022 11.5586 17.6089 11.6685 17.4444C11.7784 17.28 11.9346 17.1518 12.1173 17.0761C12.3 17.0004 12.5011 16.9806 12.6951 17.0192C12.8891 17.0578 13.0673 17.153 13.2071 17.2929C13.347 17.4327 13.4422 17.6109 13.4808 17.8049C13.5194 17.9989 13.4996 18.2 13.4239 18.3827C13.3482 18.5654 13.22 18.7216 13.0556 18.8315C12.8911 18.9414 12.6978 19 12.5 19Z" fill="#709bff"></path> </g></svg>
                        <p class="text-gray-700 text-lg">+39 345 481 5672</p>
                    </div>
                </div>
            </div>
            <button @click="downloadCV" class="text-white bg-blue-500 max-w-50 font-bold p-3 rounded-full mt-2 self-start flex flex-row items-center gap-3 px-6 m-auto mt-8 md:m-0 hover:bg-blue-600 transition">{{ t('downloadCV') }} <svg class="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from '../i18n';
import CVFile from '/Users/cont2/Documents/GitHub/Portfolio/src/assets/Tommaso Cont CV.pdf';

const { t } = useI18n();

const downloadCV = () => {
    window.open(CVFile, '_blank');
};
</script>