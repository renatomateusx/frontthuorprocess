const axios = require("axios");
import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import router from '../router';
import UTILIS_API from "../api/utilisAPI";
import API_CARRINHO_ABANDONADO from "./carrinhoAbandonadoAPI";
var API_CLIENTES = {
    GetClientes() {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CLIENTES, LBody)
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
    SaveCliente(pNovoClient) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoClient.id_usuario = LDadosLoja.id_usuario;

                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_CLIENTES, pNovoClient)
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

    DeleteClienteByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                pNovoUpSell.id_usuario = LDadosLoja.id_usuario;
                var LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_DELETE_CLIENTES, LBody)
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
    GetClienteByID(id) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    id: id,
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CLIENTE_BY_ID, LBody)
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
    SaveLead(email, nome, telefone, lead) {
        return new Promise(async (resolve, reject) => {
            const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    email: email,
                    nome: nome,
                    telefone: telefone,
                    lead: lead
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SAVE_LEAD, LBody)
                    .then(async (response) => {
                        //console.log("Response", response);
                        const LCarrinho = await UTILIS_API.GetAbandonCartSession();
                        if (LCarrinho) {
                            const LReturnUpdateCarrinho = await API_CARRINHO_ABANDONADO.UpdateDadosClienteCarrinho(nome, email, telefone, LCarrinho);
                        }
                        resolve(response);
                    })
                    .catch((error) => {
                        console.log("Reject", error);
                        reject(error);
                    });
            }
        });
    },
}
export default API_CLIENTES 
