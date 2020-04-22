
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';
Vue.use(VueSweetalert2);

var API_NOTIFICATION = {
    isShowingLoading: false,
    Notifica(titulo, mensagem, icon) {
        Vue.swal(titulo, mensagem, icon);
    },
    ShowLoading() {
        this.isShowingLoading = true;
        Vue.swal({
            title: 'Aguarde...',
            html: '',
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();          
            },
            onClose: () => {
                
            }
        })
    },
    HideLoading(){
        Vue.swal.close();
        this.isShowingLoading = false;
    }
}
export default API_NOTIFICATION 