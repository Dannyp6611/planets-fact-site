<template>
  <div class="lg:flex lg:flex-row w-full lg:gap-x-6 lg:items-center wrapper">
    <div class="py-12 pb-20 flex justify-center lg:flex-1">
      <img
        v-if="currentTab === 'overview'"
        :src="require(`../assets/${imageName}.svg`)"
        class="w-56 h-56"
        alt=""
      />
      <img
        v-if="currentTab === 'structure'"
        :src="require(`../assets/${imageName}-internal.svg`)"
        class="w-56 h-56"
        alt=""
      />
      <div v-if="currentTab === 'geology'" class="relative">
        <img
          :src="require(`../assets/${imageName}.svg`)"
          class="w-56 h-56"
          alt=""
        />
        <img
          class="absolute w-32 h-36 top-32 left-12"
          :src="require(`../assets/geology-${planet.name.toLowerCase()}.png`)"
          alt=""
        />
      </div>
    </div>
    <div
      class="
        flex flex-col
        md:flex-row
        lg:flex-col
        lg:flex-1
        gap-x-6
        flex-wrap
        h-64
        lg:h-auto
      "
    >
      <div class="flex flex-col gap-y-6 items-center md:items-start flex-1">
        <h2
          class="
            uppercase
            text-white
            font-antonio
            tracking-wide
            font-semibold
            text-4xl
          "
        >
          {{ planet.name }}
        </h2>
        <p class="text-white text-center md:text-left leading-6">
          {{ planet[currentTab].content }}
        </p>
        <p>
          <span class="text-gray-400">Source : </span>
          <span class="inline-flex items-center gap-x-2">
            <a
              :href="planet[currentTab].source"
              target="blank"
              class="underline font-bold text-gray-400"
              >Wikipedia</a
            >
            <i
              class="fas fa-external-link-square-alt text-gray-400 text-lg"
            ></i>
          </span>
        </p>
      </div>
      <ul
        class="hidden md:flex flex-1 flex-col gap-y-6 transform translate-y-7"
      >
        <li
          class="
            cursor-pointer
            w-full
            border-2 border-border-primary
            py-2
            px-6
            flex
            items-end
            transform
            transition-all
            hover:scale-105 hover:bg-border-primary
          "
          :class="[currentTab === 'overview' ? bgClass : '']"
          @click="$emit('tab-changed', 'overview')"
        >
          <span class="text-gray-300 text-base mr-10">01</span>
          <p class="uppercase tracking-widest text-white font-medium text-sm">
            overview
          </p>
        </li>
        <li
          class="
            cursor-pointer
            w-full
            border-2 border-border-primary
            py-2
            px-6
            flex
            items-end
            transform
            transition-all
            hover:scale-105 hover:bg-border-primary
          "
          :class="[currentTab === 'structure' ? bgClass : '']"
          @click="$emit('tab-changed', 'structure')"
        >
          <span class="text-gray-300 text-base mr-10">02</span>
          <p class="uppercase tracking-widest text-white font-medium text-sm">
            internal structure
          </p>
        </li>
        <li
          class="
            cursor-pointer
            w-full
            border-2 border-border-primary
            py-2
            px-6
            flex
            items-end
            transform
            transition-all
            hover:scale-105 hover:bg-border-primary
          "
          :class="[currentTab === 'geology' ? bgClass : '']"
          @click="$emit('tab-changed', 'geology')"
        >
          <span class="text-gray-300 text-base mr-10">03</span>
          <p class="uppercase tracking-widest text-white font-medium text-sm">
            surface geology
          </p>
        </li>
      </ul>
    </div>
  </div>
  <ul class="flex w-full flex-col md:flex-row gap-4 pt-20">
    <li
      class="
        w-full
        border-2 border-border-primary
        py-2
        px-6
        flex
        items-center
        md:flex-col md:items-start md:py-6 md:px-4
        justify-between
      "
    >
      <span class="text-white opacity-50 text-xs uppercase">rotation time</span>
      <p
        class="
          tracking-tightest
          font-antonio
          text-white
          font-medium
          text-2xl
          uppercase
        "
      >
        {{ planet.rotation }}
      </p>
    </li>

    <li
      class="
        w-full
        border-2 border-border-primary
        py-2
        px-4
        flex
        items-center
        md:flex-col md:items-start md:py-6 md:px-4
        justify-between
      "
    >
      <span class="text-white opacity-50 text-xs uppercase"
        >revolution time</span
      >
      <p
        class="
          tracking-tightest
          font-antonio
          text-white
          font-medium
          text-2xl
          uppercase
        "
      >
        {{ planet.revolution }}
      </p>
    </li>

    <li
      class="
        w-full
        border-2 border-border-primary
        py-2
        px-4
        flex
        items-center
        md:flex-col md:items-start md:py-6 md:px-4
        justify-between
      "
    >
      <span class="text-white opacity-50 text-xs uppercase">radius</span>
      <p
        class="
          tracking-tightest
          font-antonio
          text-white
          font-medium
          text-2xl
          uppercase
        "
      >
        {{ planet.radius }}
      </p>
    </li>

    <li
      class="
        w-full
        border-2 border-border-primary
        py-2
        px-6
        flex
        items-center
        md:flex-col md:items-start md:py-6 md:px-4
        justify-between
      "
    >
      <span class="text-white opacity-50 text-xs uppercase">average temp.</span>
      <p
        class="
          tracking-tightest
          font-antonio
          text-white
          font-medium
          text-3xl
          uppercase
        "
      >
        {{ planet.temperature }}
      </p>
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Home",
  components: {},
  emits: ["tab-changed"],
  props: ["planet", "currentTab"],
  setup(props) {
    const imageName = computed(() => {
      return props.planet.images.planet.slice(
        9,
        props.planet.images.planet.length - 4
      );
    });
    const bgClass = computed(() => {
      return `bg-${props.planet.name}`;
    });
    return { imageName, bgClass };
  },
};
</script>

<style>
@media only screen and (min-width: 1034px) {
.wrapper {
  height: calc(70vh - 90px);
}
}
</style>
