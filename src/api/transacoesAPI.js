import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "./configAxios";
import UTILIS_API from "../api/utilisAPI";
var API_TRANSACOES = {
    GetTransacoes() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await UTILIS_API.GetDadosLojaSession();
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
    GetPagamentosEfetuadosPorSeller() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_GET_PAGAMENTOS_EFETUADOS_POR_SELLER, LBody)
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

    GetTransacoesInternas() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await  UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    var LBody = {

                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_PAY_GET_TRANSACOES_INTERNAS, LBody)
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
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await  UTILIS_API.GetDadosLojaSession();
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
    ReembolsarCliente(id, valor) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await  UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id,
                        valor: valor
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
    ReembolsarClienteCheckoutPS(id, valor) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await  UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id,
                        valor:valor
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
    ReembolsarClienteCheckoutPayU(id, valor) {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    let LBody = {
                        id_usuario: LUser.user.id,
                        shop: DadosLoja.url_loja,
                        id: id,
                        valor:valor
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
    SetPaymentComissionDone(id_usuario, data_processar, paymentData, retornoPay) {
        return new Promise(async (resolve, reject) => {


            var DadosLoja = await UTILIS_API.GetDadosLojaSession();
            if (DadosLoja !== null && DadosLoja !== undefined) {
                let LBody = {
                    id_usuario: id_usuario,
                    data_processar: data_processar,
                    json_cobranca_comissao: paymentData,
                    json_response_comissao: retornoPay
                }
                axios
                    .post(constantes.WEBSITEAPI + constantes.PATH_SET_PAYMENT_COMISSION_DONE, LBody)
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
    GetChartTransacoesPerDay() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    var LBody = {
                        id_usuario: DadosLoja.id_usuario
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHART_TRANSACOES_PER_DAY, LBody)
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
    GetVendasMes() {
        return new Promise(async (resolve, reject) => {
            var LUser = await UTILIS_API.GetUserSession();
            if (LUser !== null && LUser !== undefined) {
                var DadosLoja = await UTILIS_API.GetDadosLojaSession();
                if (DadosLoja !== null && DadosLoja !== undefined) {
                    var LBody = {
                        id_usuario: DadosLoja.id_usuario
                    }
                    axios
                        .post(constantes.WEBSITEAPI + constantes.PATH_GET_CHART_SALES_MONTH, LBody)
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
export default API_TRANSACOES 