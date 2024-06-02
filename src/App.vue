<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>

  <RouterView /> -->
  <header class="flex justify-between">
    <img alt="Vue logo" src="./assets/logo.svg" width="80" height="80" />
    <nav class="flex gap-4 items-start">
      <RouterLink to="/" class="hover:border-b border-[--main-color-text]">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
