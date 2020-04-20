import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var API_PRODUTOS = {
    GetProdutos() {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    ImportFromShopify() {
        return new Promise((resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                let LBody = {
                    id_usuario: LUser.user.id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_PRODUTOS_IMPORT, LBody, API_HEADERS.getHeader())
                    .then((response) => {
                        console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    }

};
export default API_PRODUTOS 