<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'
import Loading from '@/components/Loading.vue'

const { data, error, getData, loading } = useGetData()
const router = useRouter()
const route = useRoute()
const sprites = ref(null)
onMounted(async () => {
  await getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

  if (error.value == null) {
    if (data.value.sprites.other.dream_world == null) {
      sprites.value = data.value.sprites.other.dream_world.front_default
      return
    }
    sprites.value = data.value.sprites.front_shiny
  }
})
const close = () => {
  router.push('/')
}
</script>
<template>
  <div v-if="data" class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-10">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <li
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <Loading v-if="loading" />
          <img
            v-show="!loading"
            class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            :src="sprites"
            alt=""
          />
          <h3 class="mt-6 text-sm font-medium text-gray-900">{{ data.name.toUpperCase() }}</h3>
          <div class="p-4 text-gray-900">
            <div>
              <span>Tipo: </span>
              <span v-for="(item, index) in data.types" :key="index" class="mr-2">
                {{ item.type.name }}<span v-if="index < data.types.length - 1">,</span>
              </span>
            </div>
          </div>
          <div class="p-4 text-gray-900">
            <div>
              <span>Altura: </span>
              <span class="mr-2">
                {{ data.height }}
              </span>
            </div>
          </div>
          <div class="p-4 text-gray-900">
            <div>
              <span>Peso: </span>
              <span class="mr-2">
                {{ data.weight }}
              </span>
            </div>
          </div>
          <div class="p-4 text-gray-900">
            <div class="flex flex-col items-center">
              <span>Sonido: </span>
              <audio controls class="mt-2">
                <source :src="data.cries.latest" type="audio/ogg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="flex flex-col items-center">
      <button
        @click="close"
        type="button"
        class="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Volver
      </button>
    </div>
  </div>
</template>
