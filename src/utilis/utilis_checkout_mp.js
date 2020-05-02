import Vue from "vue";
import API_NOTIFICATION from "../api/notification";
var UTILIS_CHECKOUT_MP = {
    iniciaCheckout() {
        if (Vue.prototype.$DadosCheckout.gateway == 1) {
            this.ImageProcessor =
                "http://github.bubbstore.com/gateways-e-adquirentes/mercado-pago-icon.svg";
            window.Mercadopago.setPublishableKey(Vue.prototype.$DadosCheckout.chave_publica);
            //console.log(window.Mercadopago.getIdentificationTypes());
        }
    },
    verificaDigitosCartao() {
        if (Vue.prototype.$DadosCheckout.gateway == 1) {
            const binCard = this.card_number.replace(/ /g, "");
            if (binCard.length >= 6) {
                let bin = binCard.substring(0, 6);
                window.Mercadopago.getPaymentMethod(
                    {
                        bin: bin
                    },
                    this.setPaymentMethod
                );
            }
        }
        this.maskCardNumber();
    }, setPaymentMethod(status, response) {
        //console.log("Response", response);
        if (status == 200) {
            this.payment_id = response[0].id;
            ////console.log("Payment ID", this.payment_id);
            this.getParcelas();
        } else {
            alert(`payment method info error: ${response}`);
        }
    },
    getValidadeCartao() {
        var LMes = this.validade.split("/")[0];
        var LAno = this.validade.split("/")[1];
        var LVal = {
            mes: LMes,
            ano: LAno
        };
        return LVal;
    },
    getParcelas() {
        window.Mercadopago.getInstallments(
            {
                payment_method_id: this.payment_id,
                amount: this.getTotal().total
            },
            function (status, response) {
                if (status == 200) {
                    document.getElementById("dropParcelas").options.length = 0;

                    response[0].payer_costs.forEach(installment => {
                        let opt = document.createElement("option");
                        opt.text = installment.recommended_message;
                        opt.value = installment.installments;
                        opt.id = installment.installments;
                        opt.selected = true;
                        document.getElementById("dropParcelas").appendChild(opt);
                        if (opt.id == 12) {
                            document.getElementById(opt.id).selected = true;
                        }
                    });
                } else {
                    console.log(`installments method info error: ${response}`);
                }
            }
        );
    },
    getDadosPagamentoTransacao() {
        var transacao = {
            dadosComprador: {
                nome_completo: this.nome_completo,
                email: this.email,
                cpf: this.cpf,
                telefone: this.telefone,
                cep: this.cep,
                endereco: this.endereco,
                numero_porta: this.numero_porta,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                complemento: this.complemento,
                destinatario: this.destinatario,
                numero_cartao: this.numero_cartao,
                validade: this.validade,
                nome_titular: this.nome_titular,
                codigo_segurança: this.codigo_seguranca,
                cpf_titular: this.cpf_titular
            },
            produtos: this.produtosCart,
            dadosLoja: this.dadosLoja,
            dadosCheckout: Vue.prototype.$DadosCheckout,
            paymentData: {
                transaction_amount: this.formatPrice(this.getTotal().total),
                token: this.cardToken,
                description: this.dadosLoja.nome_loja,
                installments: this.parcelas,
                payment_method_id: this.payment_id,
                payer: {
                    email: this.email
                }
            }
        };
        const JSONString = JSON.stringify(transacao);
        const LCripto = btoa(JSONString);

        return LCripto;
    },
    async iniciaPagamentoBackEnd(status, response) {
        if (status != 200 && status != 201) {
            console.log("Não foi possível gerar o token", response.message);
            window.Mercadopago.clearSession();
            API_NOTIFICATION.showNotificationW(
                "Oops!",
                "Não foi possível completar a ação. Tente novamente!",
                "warning"
            );
        } else {
            this.cardToken = response.id;
            //while (this.try == false) {
            ///console.log(this.cardToken);
            const LCripto = await this.getDadosPagamentoTransacao();
            API_NOTIFICATION.ShowLoading();
            API_CHECKOUT.DoPayBackEnd(LCripto)
                .then(retornoPay => {
                    console.log("Enviado para o backend");
                    window.Mercadopago.clearSession();
                    API_NOTIFICATION.HideLoading();
                })
                .catch(error => {
                    console.log("Erro ao tentar efetuar o pagamento", error);
                    API_NOTIFICATION.showNotification(
                        "Por favor, tente novamente ",
                        "error"
                    );
                });

            //break;
        }
    },
    async iniciaPagamentoBackEndBoleto() {
        window.Mercadopago.clearSession();
        this.cardToken = response.id;
        const LCripto = await this.getDadosPagamentoTransacao();
        API_NOTIFICATION.ShowLoading();
        API_CHECKOUT.DoPayBackEndTicket(LCripto)
            .then(retornoPay => {
                console.log("Enviado para o backend");
                window.Mercadopago.clearSession();
                API_NOTIFICATION.HideLoading();
            })
            .catch(error => {
                console.log("Erro ao tentar efetuar o pagamento", error);
                API_NOTIFICATION.showNotification(
                    "Por favor, tente novamente ",
                    "error"
                );
            });
    },
    pay() {
        API_NOTIFICATION.ShowLoading();
        const form = document.querySelector("#pay");
        //console.log("Form", form);
        if (this.formaPagamento == "creditCard") {
            window.Mercadopago.createToken(form, this.iniciaPagamentoBackEnd);
        } else if (this.formaPagamento == "boleto") {
        }
    },
}
export default UTILIS_CHECKOUT_MP 