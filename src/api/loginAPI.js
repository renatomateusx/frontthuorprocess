const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
import router from '../router';
import UTILIS_API from "../api/utilisAPI";
var API_LOGIN = {
  EfetuarLogin(login, senha) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_LOGIN, {
          email: login,
          senha: senha
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("Reject", error);
          reject(error);
        });
    });
  },
  async VerificaToken() {
    return new Promise(async (resolve, reject) => {
      const LActualPath = window.location.pathname;
      if(LActualPath) sessionStorage.setItem('actualPage', LActualPath);
      const LU = await UTILIS_API.GetUserSession();
      if (LU == undefined || LU == null) {
        router.push('/login');
      }            
      axios.interceptors.response.use((response) => {
        // Do something with response data
        return response;
      }, (error) => {
        if (error.response.status === 401) {
          sessionStorage.removeItem("user");
          router.push('/login');          
        }
        return Promise.reject(error);
      });


      // axios.interceptors.response.use((response) => {
      //   if (response.status === 401) {
      //     this.$router.push('login');
      //   }
      // });
      const LHeaders = await API_HEADERS.getHeader();
      axios
        .get(constantes.WEBSITEAPI + constantes.PATH_TOKEN, LHeaders)
        .then((res) => {
          resolve(res);
        })
        .catch(error => {

          console.log("Retorno Erros", error);
        })
    });
  }
}
export default API_LOGIN 
