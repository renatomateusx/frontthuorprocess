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
const PagSeguro = () => import('@/components/Checkouts/PagSeguro.vue');
const PayU = () => import('@/components/Checkouts/PayU.vue');
const IntegracaoPlataforma = () => import('@/views/Pages/IntegracaoPlataforma.vue');
const IntegracaoShopify = () => import('@/views/Pages/IntegracaoShopify.vue');
const UpSell = () => import('@/views/Pages/UpSell.vue')
const UpSellAdd = () => import('@/views/Pages/UpSellAdd.vue');
const Pixels = () => import('@/views/Pages/Pixels.vue');
const PixelAdd = () => import('@/views/Pages/PixelAdd.vue');
const Mensagens = () => import('@/views/Pages/Mensagens.vue');
const MensagensAdd = () => import('@/views/Pages/MensagensAdd.vue');
const Rastreio = () => import('@/views/Pages/Rastreio.vue');



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
        path: '/',
        component: Layout,
        children: [
            {
                path: '/produtos/todos',
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
            },
            {
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
            {
                path: '/marketing/upsell',
                component: UpSell
            },
            {
                path: '/marketing/upsell/add',
                component: UpSellAdd
            },
            {
                path: '/marketing/mensageria',
                component: Mensagens
            },
            {
                path: '/marketing/mensageria/add',
                component: MensagensAdd
            },
            {
                path: '/marketing/mensageria/edit/:id',
                component: MensagensAdd
            },
            {
                path: '/marketing/pixels',
                component: Pixels
            },
            {
                path: '/marketing/pixels/add',
                component: PixelAdd
            },
            {
                path: '/marketing/pixels/edit/:id',
                component: PixelAdd
            }


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
    {
        path: '/track',
        component: Rastreio
    },
    {
        path: '/track/:id',
        component: Rastreio
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
                path: '/configs/checkouts/pagseguro',
                component: PagSeguro
            }, {
                path: '/configs/checkouts/payu',
                component: PayU
            }, {
                path: '/configs/integracoes',
                component: IntegracaoPlataforma
            }, {
                path: '/configs/integracoes/shopify',
                component: IntegracaoShopify
            },

        ]
    },

    // Not found route
    {
        path: '*',
        redirect: '/'
    },
    ]
})