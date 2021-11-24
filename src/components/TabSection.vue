<template>
  <ul
    class="
      uppercase
      w-full
      flex
      items-stretch
      border-b border-border-primary
      md:hidden
      text-gray-400
      font-bold
      text-sm
    "
  >
    <li
      class="
        border-b-4 border-transparent
        flex-1
        p-2
        py-4
        text-center
        cursor-pointer
        hover:text-white
      "
      @click="currentTab = 'overview'"
      :class="{ 'border-earth text-white': currentTab === 'overview' }"
    >
      overview
    </li>
    <li
      class="
        border-b-4 border-transparent
        flex-1
        p-2
        py-4
        text-center
        cursor-pointer
        hover:text-white
      "
      @click="currentTab = 'structure'"
      :class="{ 'border-earth text-white': currentTab === 'structure' }"
    >
      structure
    </li>
    <li
      class="
        border-b-4 border-transparent
        flex-1
        p-2
        py-4
        text-center
        cursor-pointer
        hover:text-white
      "
      @click="currentTab = 'geology'"
      :class="{ 'border-earth text-white': currentTab === 'geology' }"
    >
      surface
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  emits: ["tab-changed"],
  setup(props, context) {
    const currentTab = ref("overview");

    watch(currentTab, () => {
      context.emit("tab-changed", currentTab.value);
    });

    return { currentTab };
  },
};
</script>

<style></style>
