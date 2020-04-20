const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
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
      .get(constantes.WEBSITEAPI + constantes.PATH_TOKEN, API_HEADERS.getHeader())
      .then(res => {
        console.log("Retorno Get", res);
      })
      .catch(error => {
        if (error.response.status == 401) {
          sessionStorage.removeItem("user");
          this.$router.push('login');
        }
        console.log("Retorno Erros", error);
      })
  }
}
export default API_LOGIN 
