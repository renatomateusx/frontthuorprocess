import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
var API_TRANSACOES = {
    GetTransacoes() {
        return new Promise(async (resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_GET_PEDIDOS, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    },
    DoPayBackEndTicket(cripto) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                pay: cripto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT_TICKET, LBody)
                .then((response) => {
                    //console.log("Response", response);
                    resolve(response);
                })
                .catch((error) => {
                    console.log("Reject", error);
                    reject(error);
                });

        });
    },
    GetTransacaoByID(id) {
        return new Promise(async (resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_GET_PEDIDOS_POR_ID, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    },
    ReembolsarCliente(id){
        return new Promise(async (resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_REEMDBOLSAR_PEDIDOS_POR_ID, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    },
    ReembolsarClienteCheckoutPS(id){
        return new Promise(async (resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_REEMDBOLSAR_PEDIDOS_PS_POR_ID, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    },
    ReembolsarClienteCheckoutPayU(id){
        return new Promise(async (resolve, reject) => {
            var LUser = JSON.parse(sessionStorage.getItem("user"));
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_REEMDBOLSAR_PEDIDOS_PS_POR_ID, LBody)
                        .then((response) => {
                            //console.log("Response", response);
                            resolve(response);
                        })
                        .catch((error) => {
                            console.log("Reject", error);
                            reject(error);
                        });
                }
            }
        });
    }



};
export default API_TRANSACOES 