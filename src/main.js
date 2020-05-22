/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.1.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueI18Next from '@panter/vue-i18next';
import 'element-ui/lib/theme-chalk/index.css';
import './vendor.js'

import App from './App.vue'
import router from './router'
import i18next from './i18n.js';
import Notifications from 'vue-notification'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueI18Next);
Vue.use(Notifications);

const i18n = new VueI18Next(i18next);

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')
