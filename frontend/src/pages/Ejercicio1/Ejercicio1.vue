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
  name: 'Ejercicio1',
  setup() {
    const data = ref<User[] | null>([]);

    onMounted(async () => {
      try {
        const apiService = new ApiService();
        const result = await apiService.ejercicio1();
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