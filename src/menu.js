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
        name: 'Menu',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.MENU',
        label: { value: 1, color: 'info' },
        submenu: [{
            name: 'Submenu',
            translate: 'sidebar.nav.SUBMENU',
            path: 'submenu'
        }]
    }
];

export default Menu;