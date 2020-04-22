const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
import router from '../router';
var API_LOGIN = {
  EfetuarLogin(login, senha) {
    return new Promise((resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_LOGIN, {
          email: login,
          senha: senha
        })
        .then((response) => {
          console.log("Response", response);
          resolve(response);
        })
        .catch((error) => {
          console.log("Reject", error);
          reject(error);
        });
    });
  },
  VerificaToken() {
    return new Promise((resolve, reject) => {
      if (sessionStorage.getItem("user") === undefined || sessionStorage.getItem("user") === null) {
        router.push('login');
        return;
      }
      var LUser = JSON.parse(sessionStorage.getItem("user"));
      if (LUser == null) {
        router.push('login');
        return;
      }

      axios.interceptors.response.use((response) => {
        // Do something with response data
        return response;
      }, (error) => {
        if (error.response.status === 401) {
          sessionStorage.removeItem("user");
          router.push('login');
          
        }
        return Promise.reject(error);
      });


      // axios.interceptors.response.use((response) => {
      //   if (response.status === 401) {
      //     this.$router.push('login');
      //   }
      // });
      axios
        .get(constantes.WEBSITEAPI + constantes.PATH_TOKEN, API_HEADERS.getHeader())
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
