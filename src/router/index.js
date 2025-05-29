import { createRouter, createWebHistory } from 'vue-router'
import BasicControl from '../components/BasicControl.vue'
import CompleteControl from '../components/CompleteControl.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: BasicControl
    },
    {
        path: '/completo',
        name: 'complete',
        component: CompleteControl
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 