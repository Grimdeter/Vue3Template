<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <h1 class="text-8xl">hi from tailwind</h1>
  </div>
</template>
