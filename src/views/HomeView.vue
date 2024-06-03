<script setup>
// import { ref, onMounted } from 'vue'
import Spinner from '@/components/Loading.vue'

import { useGetData } from '@/composables/getData'

const { data, error, loading, getData } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0')
</script>

<template>
  <h1 class="mt-10 text-[--main-color-text]">Pokemones</h1>
  <Spinner v-if="loading" />
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-if="data">
    <ul class="container-grid py-4">
      <li v-for="pokemon in data.results" :key="pokemon.id" class="pb-2 text-center">
        <p class="--main-color-text block w-full hover:text-[--main-color-text]">
          {{ pokemon.name }}
        </p>
      </li>
    </ul>
    <div class="mt-8 flex gap-4">
      <button
        class="hover:text-[--main-color-text]"
        @click="getData(data.previous)"
        :disabled="data.previous === null"
      >
        Previous
      </button>
      <button
        class="hover:text-[--main-color-text]"
        @click="getData(data.next)"
        :disabled="data.next === null"
      >
        Next
      </button>
    </div>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
