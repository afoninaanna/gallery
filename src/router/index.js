import { createWebHistory, createRouter } from "vue-router";
import MainPage from '@/pages/MainPage';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    },
    {
        path: '/photo',
        name: 'Photo',
        component: () => import('../pages/PhotosPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;