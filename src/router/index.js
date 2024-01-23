import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/Galeria',
            name: 'Galeria',
            component: () => import('../views/GaleriaView.vue'),
        },
        {
            path: '/informacie',
            name: 'O Hádzanej',
            props: true,
            component: () => import('../views/HadzanaView.vue'),
        },
        {
            path: '/informacie/:id',
            name: 'informacie',
            component: () => import('../views/InformacieView.vue'),
        },        
        {
            path: '/prihlasenie',
            name: 'Prihlásenie',
            props: true,
            component: () => import('../views/PrihlasenieView.vue'),
        },
    ],
});

export default router;
