import axios from 'axios'
import { ref } from 'vue'

export const useGetData = () => {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    const getData = async url => {
        loading.value = true
        try {
            const response = await axios.get(url)
            data.value = response.data
        } catch (error) {
            error.value = 'Error al obtener los datos'
        } finally {
            setTimeout(() => {
                loading.value = false
            }, 550)
        }
    }

    return { data, error, loading, getData }
}