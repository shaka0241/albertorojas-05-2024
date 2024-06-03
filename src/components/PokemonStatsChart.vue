<script>
import { ref, onMounted } from 'vue'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'

// Registramos los componentes de Chart.js que usaremos
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
)

export default {
  components: {
    RadarChart: Radar
  },
  setup() {
    const chartData = ref({
      labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
      datasets: [
        {
          label: 'Base Stats',
          data: [65, 75, 80, 85, 90, 95], // Datos dummy
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    })
    const loading = ref(true)

    const fetchPokemonStats = async () => {
      try {
        // Simulamos la carga de datos durante 2 segundos
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Una vez que los datos reales estén disponibles, los actualizaremos aquí.

        loading.value = false
      } catch (error) {
        console.error('Error fetching Pokémon stats:', error)
        loading.value = false
      }
    }

    onMounted(() => {
      fetchPokemonStats()
    })

    return {
      chartData,
      loading
    }
  }
}
</script>

<style>
/* Tailwind CSS classes are incluidas directamente en el template para estilización */
</style>
