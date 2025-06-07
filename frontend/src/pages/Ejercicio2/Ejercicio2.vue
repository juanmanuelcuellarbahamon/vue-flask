<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { ApiService } from '../../service/service';
import type { User } from '../../interfaces/randomuser.interfaces';

export default defineComponent({
  name: 'Ejercicio2',
  setup() {
    const data = ref<User | Record<string, never>>({});

    onMounted(async () => {
      try {
        const apiService = new ApiService();
        const result = await apiService.ejercicio2(10);

        if (result && typeof result === 'object') {
          data.value = result;
        } else {
          console.warn('API returned an invalid result:', result);
          data.value = {};
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        data.value = {};
      }
    });

    return {
      data,
    };
  },
});
</script>