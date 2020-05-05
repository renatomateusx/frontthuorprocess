const Menu = [
    {
        heading: 'Navegação',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Página Inicial',
        path: 'home',
        icon : 'icon-grid',
        translate: 'sidebar.nav.SINGLEVIEW'
    },
    {
        name: 'Produtos',
        path: 'produtos',
        icon : 'icon-tag',        
        submenu:[{
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
    }
];

export default Menu;