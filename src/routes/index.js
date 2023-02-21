import { createRouter, createWebHistory} from 'vue-router'

import LoginPage from '@/components/admin/LoginPage'

const routes = [
    { path: '/login', component: LoginPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export { router }