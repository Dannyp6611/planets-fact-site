<template>
    <nav v-if="isMobile" class="fixed top-24 w-0 overflow-hidden min-h-screen bg-body-bg z-50 transition-width duration-700 ease-in-out"
        :class="[ mobileNav ? 'w-full' : '' ]"   >
        <ul class="w-full h-screen flex flex-col px-4 cursor-pointer">
            <li class="flex flex-1 border-b border-border-primary items-center py-4" @click="$emit('set-planet', 'Mercury')">
                <span class="w-8 h-8 rounded-full bg-Earth mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">mercury</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Venus')">
                <span class="w-8 h-8 rounded-full bg-Venus mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">venus</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Earth')">
                <span class="w-8 h-8 rounded-full bg-Earth mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">earth</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Mars')">
                <span class="w-8 h-8 rounded-full bg-Mars mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">mars</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Jupiter')">
                <span class="w-8 h-8 rounded-full bg-Jupiter mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">jupiter</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Saturn')">
                <span class="w-8 h-8 rounded-full bg-Saturn mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">saturn</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Uranus')">
                <span class="w-8 h-8 rounded-full bg-Uranus mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">uranus</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
            <li class="flex flex-1 border-b border-border-primary items-center py-4 cursor-pointer" @click="$emit('set-planet', 'Neptune')">
                <span class="w-8 h-8 rounded-full bg-Neptune mr-10"></span>   
                <h4 class="uppercase text-white font-antonio text-3xl">neptune</h4>
                <i class="fas fa-chevron-right ml-auto text-sm text-white"></i>
            </li>
        </ul>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ["mobileNav"],
    setup() {
        const isMobile = ref(null);
        const windowWidth = ref(null);

        const checkScreen = () => {
            windowWidth.value = window.innerWidth;
            if (windowWidth.value >= 768) {
                isMobile.value = false;
                return;
            }
            isMobile.value = true; 
        }
        
        // when the browser first loads check the users screen to see if device is mobile
        checkScreen();

        // call the check screen function every time the window is resized
        window.addEventListener("resize", checkScreen);

        return { isMobile }
    }
}
</script>

<style>

</style>