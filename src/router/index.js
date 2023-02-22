import { createRouter, createWebHistory} from 'vue-router'
 
import InfoMain from '@/views/InfoMain.vue'
import LoginPage from '@/views/LoginPage.vue'
import AdminPage from '@/views/AdminPage.vue'

const routes = [
    {
        path: '/',
        name: 'InfoMain',
        component: InfoMain
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/admin',
        name: 'AdminPage',
        component: AdminPage,
        children: [
            {
                path: '',
                name: '',
                component: AdminPage
            },
            {
                path: 'users',
                name: '',
                component: AdminPage
            },
            {
                path: 'rents',
                name: '',
                component: AdminPage
            },
            {
                path: 'claims',
                name: '',
                component: AdminPage
            },
            {
                path: 'stands',
                name: '',
                component: AdminPage
            },
            {
                path: 'demands',
                name: '',
                component: AdminPage
            },
            {
                path: 'notice',
                name: '',
                component: AdminPage
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export { router }