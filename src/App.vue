<template>
  <div
    class="
      w-full
      min-h-screen
      font-spartan
      bg-body-bg bg-body-pattern bg-cover bg-repeat
    "
  >
    <Navbar
      @tab-changed="setPlanetInfo"
      @set-planet="setPlanet"
      :planet="planet"
    />
    <main v-if="planets.length" class="container text-white py-6 px-8">
      <router-view
        :planet="planet"
        :currentTab="currentTab"
        @tab-changed="setPlanetInfo"
      />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import json from "../data.json";
import { ref } from "@vue/reactivity";

export default {
  components: { Navbar },
  setup() {
    const planets = ref(json);
    const planet = ref(planets.value[2]);
    const currentTab = ref("overview");

    const setPlanet = (name) => {
      planet.value = planets.value.find((planet) => planet.name === name);
    };

    const setPlanetInfo = (value) => {
      currentTab.value = value;
    };

    return { planets, planet, currentTab, setPlanet, setPlanetInfo };
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@200;300;400;500;600;700&family=Spartan:wght@200;400;700&display=swap');
</style>
