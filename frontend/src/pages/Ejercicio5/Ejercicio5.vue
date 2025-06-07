<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ApiService } from '../../service/service';

export default defineComponent({
  name: 'Ejercicio5',
  setup() {
    const data = ref<string | null>('');

    onMounted(async () => {
      try {
        const apiService = new ApiService();
        const result = await apiService.ejercicio5('jungle');

        data.value = result
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      data,
    };
  },
});
</script>