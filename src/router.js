import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'
// SingleView
const Home = () => import ('@/views/SingleView/Home.vue')
// SubMenu
const SubMenu = () => import ('@/views/SubMenu/SubMenu.vue')

const Login = () => import ('@/views/Pages/Login.vue')

const Produtos = () => import ('@/views/Pages/Produtos.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/produto/detalhe/:id',
            component: Layout,
            children:[
                {
                    path: '/',
                    component: Produtos
                }
            ]
        },
        // Admin Pages
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/home',
                    component: Home
                }, {
                    path: '/submenu',
                    component: SubMenu
                }
            ]
        },
        {
            path: '/produtos',
            component: Layout,
            children:[
                {
                    path: '/todos',
                    component: Produtos
                }
            ]
        },
        // Not found route
        {
            path: '*',
            redirect: '/'
        }
    ]
})