const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "./utilisAPI";
var API_AJUDA = {
    GetAjuda() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {                   
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_AJUDA, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    GetAjudaByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {                  
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_AJUDA_BY_ID, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    SaveAjuda(ajuda) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    titulo: ajuda.titulo,
                    texto: ajuda.texto,
                    tag: ajuda.tag,
                    status: ajuda.status
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_AJUDA, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
    DeleteAjudaByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id: id
                }                
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_DELETE_AJUDA_BY_ID, LBody)
                    .then((response) => {
                        //console.log("Response", response);
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    }    
    
}
export default API_AJUDA 
