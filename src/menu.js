const Menu = [
    {
        heading: 'Navegação',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Página Inicial',
        path: 'home',
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
            path: 'todos'
        }]
    },
    {
        name: 'Pedidos',
        icon: 'fa fa-donate',
        translate: 'sidebar.nav.MENU',
        label: { value: 1, color: 'info' },
        path: 'pedidos'
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
        },]
    },
];

export default Menu;