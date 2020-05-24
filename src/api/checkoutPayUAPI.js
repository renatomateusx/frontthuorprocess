import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import UTILIS_API from "../api/utilisAPI";
var API_CHECKOUT_PU = {
    DoPayBackEnd(cripto) {
        return new Promise(async (resolve, reject) => {
            let LBody = {
                LCrypto: cripto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT_PAY_U, LBody)
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
    GetCheckouts() {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHECKOUTS, LBody)
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
    GetCheckoutsByID(id) {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {

                let LBody = {
                    id_usuario: LDadosLoja.id_usuario,
                    gateway: id
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHECKOUTS_BY_ID, LBody)
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
    GetIntegracaoCheckout() {
        return new Promise(async (resolve, reject) => {
           const LDadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (LDadosLoja != undefined) {
                axios
                    .get(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CHECKOUT)
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
    GetIntegracaoCheckoutByID(id) {
        return new Promise(async (resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
                    
                    let LBody = {
                        id_usuario: LUser.user.id,
                        id: id
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_INTEGRACAO_CHECKOUT_BY_ID, LBody)
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
    InsertCheckout(checkout_form) {
        return new Promise(async (resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
                    checkout_form.id_usuario = LUser.user.id;
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_INSERT_CHECKOUT_MP, checkout_form)
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

    UpdateStatus(checkout_form) {
        return new Promise(async (resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_STATUS_CHECKOUT_MP, checkout_form)
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
    UpdateAtivaBoleto(checkout_form) {
        return new Promise(async (resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_ATIVA_BOLETO_CHECKOUT_MP, checkout_form)
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
    UpdateAutoProcessamento(checkout_form) {
        return new Promise(async (resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_UPDATE_ATIVA_AUTO_PROCESSAMENTO_CHECKOUT_MP, checkout_form)
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


};
export default API_CHECKOUT_PU 