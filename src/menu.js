const Menu = [
    {
        heading: 'Main Navigation',
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
        name: 'Cart',
        icon: 'icon-cart',
        translate: 'sidebar.nav.MENU',
        label: { value: 1, color: 'info' },
        path: 'cart'
        // submenu: [{
        //     name: 'Submenu',
        //     translate: 'sidebar.nav.SUBMENU',
        //     path: 'submenu'
        // }]
    }
];

export default Menu;