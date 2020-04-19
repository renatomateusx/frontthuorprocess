
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

var API_NOTIFICATION = {
    Notifica(titulo, mensagem, icon) {
        Vue.swal(titulo, mensagem, icon);
    }
}
export default API_NOTIFICATION 