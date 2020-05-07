import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'loaders.css/loaders.css';
import 'spinkit/css/spinkit.css';
import Notifications from 'vue-notification'
Vue.use(VueSweetalert2);
Vue.use(Notifications);

var API_NOTIFICATION = {
    isShowingLoading: false,
    Notifica(titulo, mensagem, icon) {
        Vue.swal(titulo, mensagem, icon);
    },
    ShowLoading() {
        this.isShowingLoading = true;
        Vue.swal({
            customClass: 'swal-wide',
            title: '<span class="text-aguard">Aguarde...</span>',
            html: " <div class='card-body align-items-center justify-content-center'>             <div class='ball-scale-ripple-multiple widthLoadingDiv'>                <div class='loadingSwall'></div>               <div class='loadingSwall'></div>                <div class='loadingSwall'></div>            </div>        </div>",
            showConfirmButton: false,
            showCancelButton: false,
            allowEnterKey: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            timerProgressBar: true,
            onBeforeOpen: () => {
                // Swal.showLoading();          
            },
            onClose: () => {

            }
        })
    },
    ShowLoadingPay() {
        if (!this.isShowingLoading) {
            this.isShowingLoading = true;
            Vue.swal({
                customClass: 'swal-wide',
                title: '<span class="text-aguard">Momentinho...</span>',
                html: " <div class='card-body align-items-center justify-content-center'>             <div class='ball-scale-ripple-multiple widthLoadingDiv'>                <div class='loadingSwall'></div>               <div class='loadingSwall'></div>                <div class='loadingSwall'></div>            </div>        </div>",
                showConfirmButton: false,
                showCancelButton: false,
                allowEnterKey: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    // Swal.showLoading();          
                },
                onClose: () => {

                }
            })
        }
    },
    HideLoading() {
        if (this.isShowingLoading) {
            Vue.swal.close();
            this.isShowingLoading = false;
        }
    },
    showNotification(message, type) {
        const Toast = Vue.swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Vue.swal.stopTimer)
                toast.addEventListener('mouseleave', Vue.swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: type,
            title: message
        })
    },

    showNotificationW(title, message, type) {
        Vue.swal(
            title,
            message,
            type
        );
    },
    showNotificationConfirm(title, message, type, callback) {
        Vue.swal({
            title: title,
            text: message,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, faça isso!',
            cancelButtonText: 'Não'
        }).then((result) => {
            
            if (result.value) {
                callback();
            }
        })
    }
}
export default API_NOTIFICATION 