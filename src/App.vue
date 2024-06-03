<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between">
    <img
      alt="Vue logo"
      src="https://web.talana.com/hubfs/sitio-noviembre-2022/Logo-Talana.webp"
      width="80"
      height="80"
    />
    <nav class="flex gap-4 items-start">
      <RouterLink to="/" class="hover:border-b border-[--main-color-text]">Home</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
