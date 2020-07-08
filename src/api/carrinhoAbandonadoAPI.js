const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_CARRINHO_ABANDONADO = {
    GetCarrinho() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CARRINHO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    SaveCarrinho(carrinho) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                carrinho.id_usuario = LDadosLoja.id_usuario;
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_CARRINHO, carrinho)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateStatusCarrinho(status, ids){
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                var LBody = {
                    status:status,
                    id_cart: ids
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_CARRINHO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    UpdateDadosClienteCarrinho(nome_cliente, email_cliente, telefone_cliente,ids){
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                var LBody = {
                    nome_cliente:nome_cliente, 
                    email_cliente:email_cliente, 
                    telefone_cliente:telefone_cliente,
                    id_cart: ids
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_CADOS_CLIENTE_CARRINHO, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    }
    
    
}
export default API_CARRINHO_ABANDONADO 
