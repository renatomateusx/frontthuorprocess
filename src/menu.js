const Menu = [
    {
        heading: 'Navegação',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Página Inicial',
        path: '/home',
        icon: 'icon-grid',
        translate: 'sidebar.nav.SINGLEVIEW'
    },
    {
        name: 'Produtos',
        path: 'produtos',
        icon: 'icon-tag',
        submenu: [{
            name: 'Ver Todos',
            translate: 'sidebar.nav.SUBMENU',
            path: '/produtos/todos'
        }]
    },
    {
        name: 'Pedidos',
        icon: 'fa fa-donate',
        translate: 'sidebar.nav.MENU',
        // label: { value: 1, color: 'info' },
        path: '/pedidos'
        // submenu: [{
        //     name: 'Submenu',
        //     translate: 'sidebar.nav.SUBMENU',
        //     path: 'submenu'
        // }]
    },
    {
        name: 'Configurações',
        path: 'configuracoes',
        icon: 'icon-settings',
        submenu: [{
            name: 'Checkout',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-donate',
            path: '/configs/checkouts'
        }, {
            name: 'Integrações',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-donate',
            path: '/configs/integracoes'
        },{
            name: 'Campanhas',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-campaign',
            path: '/configs/campanhas'
        },]
    },
    {
        name: 'Marketing',
        path: 'marketing',
        icon: 'fa fa-bullhorn',
        submenu: [{
            name: 'UpSell',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-donate',
            path: '/marketing/upsell'
        }, {
            name: 'Mensagens',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-chat',
            path: '/marketing/mensageria'
        }, {
            name: 'Pixel',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-donate',
            path: '/marketing/pixels'
        }, {
            name: 'Cupons',
            translate: 'sidebar.nav.SUBMENU',
            icon: 'fa fa-tag',
            path: '/marketing/cupons'
        }]
    },
    {
        name: 'Rastrear Encomenda',
        path: '/track',
        icon: 'fa fa-thumbtack',
        translate: 'sidebar.nav.MENU'
    },
    {
        name: 'Apps',
        path: '/apps',
        icon: 'fab fa-medapps',
        translate: 'sidebar.nav.MENU'
    },
    {
        name: 'Ajuda',
        path: '/ajuda',
        icon: 'fa fa-life-ring',
        translate: 'sidebar.nav.MENU'
    },

];

export default Menu;