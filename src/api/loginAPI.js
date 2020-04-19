
const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var API_LOGIN = {
  EfetuarLogin(login, senha) {
    return new Promise((resolve, reject) => {
      console.log("Login URL", constantes.WEBSITEAPI + constantes.PATH_LOGIN);
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_LOGIN, {
          email: login,
          senha: senha
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  VerificaToken() {
    var LUser = JSON.parse(sessionStorage.getItem("user"));
    if (LUser == null) {
      this.$router.push('login');
    }
    axios.interceptors.response.use((response) => {
      if (response.status === 401) {
        this.$router.push('login');
      }
    });
    axios
      .get(constantes.WEBSITEAPI, API_HEADERS.getHeader())
      .then(res =>{
        console.log("Retorno Get", res);
      })
      .catch(error =>{
        console.log("Retorno Erro", error);
      })
  }
}
export default API_LOGIN 
