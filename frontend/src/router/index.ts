// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Ejercicio1 from '../pages/Ejercicio1/Ejercicio1.vue';
import Ejercicio2 from '../pages/Ejercicio2/Ejercicio2.vue';
import Ejercicio3 from '../pages/Ejercicio3/Ejercicio3.vue';
import Ejercicio4 from '../pages/Ejercicio4/Ejercicio4.vue';
import Ejercicio5 from '../pages/Ejercicio5/Ejercicio5.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ejercicio1',
    name: 'ejercicio1',
    component: Ejercicio1,
  },
  {
    path: '/ejercicio2',
    name: 'ejercicio2',
    component: Ejercicio2,
  },
  {
    path: '/ejercicio3',
    name: 'ejercicio3',
    component: Ejercicio3,
  },
  {
    path: '/ejercicio4',
    name: 'ejercicio4',
    component: Ejercicio4,
  },
  {
    path: '/ejercicio5',
    name: 'ejercicio5',
    component: Ejercicio5,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;