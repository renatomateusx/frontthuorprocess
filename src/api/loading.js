import Vue from 'vue'
import Loading from 'vue-loading-overlay'

Vue.use(Loading);
import "vue-loading-overlay/dist/vue-loading.css";
var API_LOADING = {
    isShowingLoading: false,
    ShowLoading() {
        if (!this.isShowingLoading) {
            this.isShowingLoading = true;
            Vue.prototype.$loader = Loading.show({
                // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: true,
                onCancel: this.onCancel,
                fullPage: true,
                loader: "bars",
                color: "#007BFF",
                width: 80,
                height: 80
            });
        }
    },
    HideLoading() {
        if (this.isShowingLoading) {
            this.isShowingLoading = false;
            Vue.prototype.$loader.hide();

        }
    }
}
export default API_LOADING 