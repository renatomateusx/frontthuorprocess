import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'
// SingleView
const Home = () => import('@/views/SingleView/Home.vue')
// SubMenu
const SubMenu = () => import('@/views/SubMenu/SubMenu.vue')

const Login = () => import('@/views/Pages/Login.vue')

const Produtos = () => import('@/views/Pages/Produtos.vue')
const DetalheProduto = () => import('@/views/Pages/DetalheProduto.vue')

const Cart = () => import('@/components/Cart/Cart.vue');

const Checkout = () => import('@/components/Cart/Checkout.vue');
const Pay = () => import('@/components/Cart/Pay.vue');
const ObrigadoCartao = () => import('@/views/Pages/ObrigadoCartao.vue');
const ObrigadoBoleto = () => import('@/views/Pages/ObrigadoBoleto.vue');
const Pedidos = () => import('@/views/Pages/Pedidos.vue');
const DetalhePedido = () => import('@/views/Pages/DetalhePedido.vue');
const IntegracaoCheckout = () => import('@/views/Pages/IntegracaoCheckout.vue');
const MercadoPago = () => import('@/components/Checkouts/MercadoPago.vue');

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
        path: 'produtos',
        component: Layout,
        children: [
            {
                path: '/todos',
                component: Produtos
            },
            {
                path: '/produtos/detalhe/:id',
                component: DetalheProduto
            }
        ]
    },
    // {
    //     path: '/produto/detalhe/:id',
    //     component: Layout,
    //     children: [
    //         {
    //             path: '/',
    //             component: DetalheProduto
    //         }
    //     ]
    // },
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
            },
            {
                path: '/pedidos',
                component: Pedidos
            },
            {
                path: '/pedidos/detalhe/:id',
                component: DetalhePedido
            },
        ]
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/checkout',
        component: Checkout,
    },
    {
        path: '/cart/items',
        component: Cart
    },
    {
        path: '/pay/:id',
        component: Pay
    },
    {
        path: '/obrigado-cartao',
        component: ObrigadoCartao
    },
    {
        path: '/obrigado-boleto',
        component: ObrigadoBoleto
    },

    // Not found route
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/configs/checkouts',
                component: IntegracaoCheckout
            }, {
                path: '/configs/checkouts/mercadopago',
                component: MercadoPago
            }, {
                path: '/configs/integracoes',
                component: Home
            },

        ]
    },
    ]
})