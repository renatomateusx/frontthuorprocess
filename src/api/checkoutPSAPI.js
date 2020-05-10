import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
var API_CHECKOUT = {
    GetPublicKey(type, token) {
        return new Promise((resolve, reject) => {

            let LBody = {
                "type": type,
                "token": token
            }           
           
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PS_SESSION, LBody)
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
    DoPayPagSeguro(pCrypto) {
        return new Promise((resolve, reject) => {
            var LBody={
                LCrypto : pCrypto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PS_CHARGE, LBody, {
                    'Content-Type': 'application/json',
                })
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
    DoPayBackEnd(cripto) {
        return new Promise((resolve, reject) => {
            let LBody = {
                pay: cripto
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_PAY_CHECKOUT, LBody)
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
        return new Promise((resolve, reject) => {
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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));

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
        return new Promise((resolve, reject) => {
            if (sessionStorage.getItem('DadosLoja') != null || sessionStorage.getItem('DadosLoja') != undefined) {
                const LDadosLoja = JSON.parse(sessionStorage.getItem('DadosLoja'));
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
        return new Promise((resolve, reject) => {

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
    InsertCheckoutMP(checkout_form) {
        return new Promise((resolve, reject) => {

            if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user') != undefined) {
                const LUser = JSON.parse(sessionStorage.getItem('user'));
                if (LUser !== null && LUser !== undefined) {
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

    UpdateStatusMP(checkout_form) {
        return new Promise((resolve, reject) => {

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
    UpdateAtivaBoletoMP(checkout_form) {
        return new Promise((resolve, reject) => {

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
    UpdateAutoProcessamentoMP(checkout_form) {
        return new Promise((resolve, reject) => {

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
export default API_CHECKOUT 