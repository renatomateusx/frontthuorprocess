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
    }
    
}
export default API_CARRINHO_ABANDONADO 
