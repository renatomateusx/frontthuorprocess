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
  GetUserByID(id) {
    return new Promise((resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_GET_BY_ID, {
          id: id
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
  AddUser(nome, email, senha) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_ADD_USER, {
          nome: nome,
          email: email,
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
  UpdateUser(id, plano, json_plano_pagamento, proximo_pagamento) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_USER, {
          id: id,
          plano: plano,
          json_plano_pagamento: json_plano_pagamento,
          proximo_pagamento: proximo_pagamento,
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
  RedefineSenha(email) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_REDEFINE_SENHA, {
          email: email
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

  AlteraSenha(token, senha) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_ALTERA_SENHA, {
          token: token,
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
  VerificaEmailCadastro(email) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_VERIFICA_EMAIL_CADASTRADO, {
          email: email,
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
      if (LActualPath) UTILIS_API.SetActualPage(LActualPath);
      const LU = await UTILIS_API.GetUserSession();
      if (LU == undefined || LU == null) {
        router.push('/login');
      }
      axios.interceptors.response.use((response) => {
        // Do something with response data
        return response;
      }, (error) => {
        if (error.response.status === 401) {
          UTILIS_API.removeUserSession();
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
  },
  AtivarEmail(token) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(constantes.WEBSITEAPI + constantes.PATH_LOGIN_ATIVAR_EMAIL, {
          token: token
        })
        .then((response) => {
          console.log(response.data);
          resolve(response);
        })
        .catch((error) => {
          console.log("Reject", error);
          reject(error);
        });
    });
  },
}
export default API_LOGIN 
