import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import Layout from '@/components/Layout/Layout'
import LayoutHorizontal from '@/components/Layout/LayoutHorizontal'
import LayoutPage from '@/components/Layout/LayoutPage'
// SingleView
const Home = () => import('@/views/SingleView/Home.vue');
// SubMenu
const SubMenu = () => import('@/views/SubMenu/SubMenu.vue');

const Login = () => import('@/views/Pages/Login.vue');
const Register = () => import('@/views/Pages/Register.vue');
const Recover = () => import('@/views/Pages/Recover.vue');

const Produtos = () => import('@/views/Pages/Produtos.vue');
const DetalheProduto = () => import('@/views/Pages/DetalheProduto.vue');

const Cart = () => import('@/components/Cart/Cart.vue');

const Checkout = () => import('@/components/Cart/Checkout.vue');
const Pay = () => import('@/components/Cart/Pay.vue');
const ObrigadoCartao = () => import('@/views/Pages/ObrigadoCartao.vue');
const ObrigadoBoleto = () => import('@/views/Pages/ObrigadoBoleto.vue');
const Pedidos = () => import('@/views/Pages/Pedidos.vue');
const Comissoes = () => import('@/views/Pages/Comissoes.vue');
const Mensalidades = () => import('@/views/Pages/Mensalidades.vue');

const Admin = () => import('@/views/Pages/Admin.vue');
const DetalhePedido = () => import('@/views/Pages/DetalhePedido.vue');
const IntegracaoCheckout = () => import('@/views/Pages/IntegracaoCheckout.vue');
const MercadoPago = () => import('@/components/Checkouts/MercadoPago.vue');
const PagSeguro = () => import('@/components/Checkouts/PagSeguro.vue');
const PayU = () => import('@/components/Checkouts/PayU.vue');
const IntegracaoPlataforma = () => import('@/views/Pages/IntegracaoPlataforma.vue');
const IntegracaoShopify = () => import('@/views/Pages/IntegracaoShopify.vue');
const UpSell = () => import('@/views/Pages/UpSell.vue')
const UpSellAdd = () => import('@/views/Pages/UpSellAdd.vue');
const CrossSell = () => import('@/views/Pages/CrossSell.vue')
const CrossSellAdd = () => import('@/views/Pages/CrossSellAdd.vue');
const Pixels = () => import('@/views/Pages/Pixels.vue');
const PixelAdd = () => import('@/views/Pages/PixelAdd.vue');
const Mensagens = () => import('@/views/Pages/Mensagens.vue');
const MensagensAdd = () => import('@/views/Pages/MensagensAdd.vue');
const Rastreio = () => import('@/views/Pages/Rastreio.vue');
const Cupons = () => import('@/views/Pages/Cupons.vue');
const CupomAdd = () => import('@/views/Pages/CupomAdd.vue');
const IntegracaoCampanhas = () => import('@/views/Pages/IntegracaoCampanhas.vue');
const AbandonoCarrinho = () => import('@/views/Pages/AbandonoCarrinho.vue');
const Activate = () => import('@/views/Pages/Activate.vue');
const Redefinir = () => import('@/views/Pages/Redefinir.vue');
const Review = () => import('@/views/Pages/Review.vue');
const Apps = () => import('@/views/Pages/Apps.vue');
const AppParcel = () => import('@/views/Pages/AppParcel.vue');
const AppPopUp = () => import('@/views/Pages/PopUp.vue');
const PerfilUsuario = () => import('@/views/Pages/PerfilUsuario.vue');
const Ajuda = () => import('@/views/Pages/Ajuda.vue');
const AdminAjuda = () => import('@/views/Pages/AdminAjuda.vue');
const AdminAjudaEdit = () => import('@/views/Pages/AdminAjudaEdit.vue');
const Dashboard = () => import('@/views/SingleView/Dashboard.vue');

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
        path: '/ativacao/:id',
        component: Activate
    },
    {
        path: '/cadastro',
        component: Register
    },
    {
        path: '/recuperar',
        component: Recover
    },
    {
        path: '/redefinir/:id',
        component: Redefinir
    },
    {
        path: '/review',
        component: Review
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
                path: '/dashboard',
                component: Dashboard
            },
            {
                path: '/perfil',
                component: PerfilUsuario
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
                path: '/admin',
                component: Admin
            },
            {
                path: '/admin/comissoes',
                component: Comissoes
            },
            {
                path: '/admin/mensalidades',
                component: Mensalidades
            },
            {
                path: '/admin/ajuda',
                component: AdminAjuda
            },
            {
                path: '/admin/ajuda/edit/:id',
                component: AdminAjudaEdit
            },
            {
                path: '/admin/ajuda/nova',
                component: AdminAjudaEdit
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
                path: '/marketing/upsell/edit/:id',
                component: UpSellAdd
            },

            {
                path: '/marketing/crosssell',
                component: CrossSell
            },
            {
                path: '/marketing/crosssell/add',
                component: CrossSellAdd
            },
            {
                path: '/marketing/crosssell/edit/:id',
                component: CrossSellAdd
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
            },
            {
                path: '/marketing/cupons',
                component: Cupons
            },
            {
                path: '/marketing/cupons/add',
                component: CupomAdd
            },
            {
                path: '/marketing/cupons/edit/:id',
                component: CupomAdd
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
            {
                path: '/apps',
                component: Apps
            },
            {
                path: '/apps/thuor-parcel',
                component: AppParcel
            },
            {
                path: '/apps/thuor-pop-up',
                component: AppPopUp
            },
            {
                path: '/ajuda',
                component: Ajuda
            },
            {
                path: '/configs/campanhas',
                component: IntegracaoCampanhas
            },
            {
                path: '/configs/campanhas/abandcart',
                component: AbandonoCarrinho
            }

        ]
    },

    // Not found route
    {
        path: '*',
        redirect: '/'
    },
    ]
})