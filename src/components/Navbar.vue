<template>
  <header
    class="
      w-full
      bg-transparent
      p-6
      lg:px-12
      flex
      items-end
      flex-wrap
      justify-center
      gap-y-10
      border-b border-border-primary
    "
  >
    <h1
      class="
        uppercase
        text-white text-4xl
        font-antonio font-light
        tracking-tighter
      "
    >
      the planets
    </h1>
    <button role="button" class="focus:outline-none ml-auto md:hidden" @click="toggleMobileNav">
      <i class="fas fa-bars text-white text-3xl"></i>
    </button>
    <nav
      class="
        w-full
        hidden
        md:block
        lg:flex lg:flex-1 lg:items-center lg:justify-end
      "
    >
      <ul
        class="
          uppercase
          text-gray-300
          font-normal
          flex
          justify-center
          text-sm
          items-center
          gap-x-4
        "
      >
        <li
          @click="$emit('set-planet', 'Mercury')"
          class="cursor-pointer"
          :class="[planet.name === 'Mercury' ? 'active' : '']"
        >
          mercury
        </li>
        <li
          @click="$emit('set-planet', 'Venus')"
          class="cursor-pointer"
          :class="[planet.name === 'Venus' ? 'active' : '']"
        >
          venus
        </li>
        <li
          @click="$emit('set-planet', 'Earth')"
          class="cursor-pointer"
          :class="[planet.name === 'Earth' ? 'active' : '']"
        >
          earth
        </li>
        <li
          @click="$emit('set-planet', 'Mars')"
          class="cursor-pointer"
          :class="[planet.name === 'Mars' ? 'active' : '']"
        >
          mars
        </li>
        <li
          @click="$emit('set-planet', 'Jupiter')"
          class="cursor-pointer"
          :class="[planet.name === 'Jupiter' ? 'active' : '']"
        >
          jupiter
        </li>
        <li
          @click="$emit('set-planet', 'Saturn')"
          class="cursor-pointer"
          :class="[planet.name === 'Saturn' ? 'active' : '']"
        >
          saturn
        </li>
        <li
          @click="$emit('set-planet', 'Uranus')"
          class="cursor-pointer"
          :class="[planet.name === 'Uranus' ? 'active' : '']"
        >
          uranus
        </li>
        <li
          @click="$emit('set-planet', 'Neptune')"
          class="cursor-pointer"
          :class="[planet.name === 'Neptune' ? 'active' : '']"
        >
          neptune
        </li>
      </ul>
    </nav>
  </header>
  <MobileNav :mobileNav="mobileNav" @set-planet="setPlanet" />
  <TabSection @tab-changed="changeTab" />
</template>

<script>
import TabSection from "./TabSection.vue";
import MobileNav from "./MobileNav.vue";
import { ref, watch } from "vue";
export default {
  components: { TabSection, MobileNav },
  emits: ["tab-changed", "set-planet"],
  props: ["planet"],
  setup(props, context) {
    const mobileNav = ref(null);
    
    const changeTab = (value) => {
      context.emit("tab-changed", value);
    };

    const setPlanet = (planetName) => {
      mobileNav.value = false;
      context.emit('set-planet', planetName);
    }

    const toggleMobileNav = () => {
      mobileNav.value = !mobileNav.value;
    }

    watch(mobileNav, () => {
      if (mobileNav.value) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    })

    return { changeTab, mobileNav, setPlanet, toggleMobileNav };
  },
};
</script>

<style scoped>
li {
  position: relative;
}
li::before {
  content: "";
  display: none;
  position: absolute;
  top: 42px;
  height: 3px;
  background-color: rgb(45, 104, 240);
}
li:hover::before {
  display: block;
  animation-name: listItem;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}
li.active::before {
  display: block;
}
@keyframes listItem {
  from {
    width: 10%;
  }
  to {
    width: 100%;
  }
}
</style>
