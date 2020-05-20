import axios from 'axios';

import constantes from "./constantes";
import API_HEADERS from "../api/configAxios";
var UTILIS_API = {
    VIA_CEP(cep) {
        return new Promise((resolve, reject) => {
            var URL = constantes.PATH_VIACEP.replace("@", cep);
            axios
                .get(URL)
                .then((response) => {
                    //console.log("Response", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("Reject", error);
                    reject(error);
                });

        });
    },
    CREATE_FORM_MP(pdescription, pamount, pcardNumber, pcardholderName, pcardExpirationMonth, pcardExpirationYear, psecurityCode, parcela, pdocNumber, pemail, ppayment_method_id) {
        return new Promise((resolve, reject) => {
            var f = document.createElement("form");
            f.setAttribute('method', "post");
            f.setAttribute('action', "/processar_pagamento");
            f.setAttribute('id', 'pay');
            f.setAttribute('name', 'pay');
            var fieldSet = document.createElement("FIELDSET");

            var description = document.createElement("input");
            description.setAttribute('type', "text");
            description.setAttribute('name', "description");
            description.setAttribute('id', "description");
            description.setAttribute('data-checkout', "description");
            description.setAttribute('value', pdescription);
            fieldSet.appendChild(description);

            var transaction_amount = document.createElement("input");
            transaction_amount.setAttribute('type', "text");
            transaction_amount.setAttribute('name', "transaction_amount");
            transaction_amount.setAttribute('id', "transaction_amount");
            transaction_amount.setAttribute('data-checkout', "transaction_amount");
            transaction_amount.setAttribute('value', pamount);
            fieldSet.appendChild(transaction_amount);

            var cardNumber = document.createElement("input");
            cardNumber.setAttribute('type', "text");
            cardNumber.setAttribute('name', "cardNumber");
            cardNumber.setAttribute('id', "cardNumber");
            cardNumber.setAttribute('data-checkout', "cardNumber");
            cardNumber.setAttribute('value', pcardNumber);
            fieldSet.appendChild(cardNumber);

            var cardholderName = document.createElement("input");
            cardholderName.setAttribute('type', "text");
            cardholderName.setAttribute('name', "cardholderName");
            cardholderName.setAttribute('id', "cardholderName");
            cardholderName.setAttribute('data-checkout', "cardholderName");
            cardholderName.setAttribute('value', pcardholderName);
            fieldSet.appendChild(cardholderName);

            var cardExpirationMonth = document.createElement("input");
            cardExpirationMonth.setAttribute('type', "text");
            cardExpirationMonth.setAttribute('name', "cardExpirationMonth");
            cardExpirationMonth.setAttribute('id', "cardExpirationMonth");
            cardExpirationMonth.setAttribute('data-checkout', "cardExpirationMonth");
            cardExpirationMonth.setAttribute('value', pcardExpirationMonth);
            fieldSet.appendChild(cardExpirationMonth);

            var cardExpirationYear = document.createElement("input");
            cardExpirationYear.setAttribute('type', "text");
            cardExpirationYear.setAttribute('name', "cardExpirationYear");
            cardExpirationYear.setAttribute('id', "cardExpirationYear");
            cardExpirationYear.setAttribute('data-checkout', "cardExpirationYear");
            cardExpirationYear.setAttribute('value', pcardExpirationYear);
            fieldSet.appendChild(cardExpirationYear);

            var securityCode = document.createElement("input");
            securityCode.setAttribute('type', "text");
            securityCode.setAttribute('name', "securityCode");
            securityCode.setAttribute('id', "securityCode");
            securityCode.setAttribute('data-checkout', "securityCode");
            securityCode.setAttribute('value', psecurityCode);
            fieldSet.appendChild(securityCode);

            var installments = document.createElement("select");
            installments.name = "installments";
            installments.id = "installments";
            var option = document.createElement("option");
            option.setAttribute('value', parcela);
            option.setAttribute('selected', 'selected');
            installments.appendChild(option);
            fieldSet.appendChild(installments);

            var docType = document.createElement("select");
            docType.name = "docType";
            docType.id = "docType";
            docType.setAttribute('data-checkout', 'docType');
            var optionD = document.createElement("option");
            optionD.setAttribute('value', "CPF");
            optionD.setAttribute('selected', 'selected');
            docType.appendChild(optionD);
            fieldSet.appendChild(docType);

            var docNumber = document.createElement("input");
            docNumber.setAttribute('type', "text");
            docNumber.setAttribute('name', "docNumber");
            docNumber.setAttribute('id', "docNumber");
            docNumber.setAttribute('data-checkout', "docNumber");
            docNumber.setAttribute('value', pdocNumber);
            fieldSet.appendChild(docNumber);

            var email = document.createElement("input");
            email.setAttribute('type', "text");
            email.setAttribute('name', "email");
            email.setAttribute('id', "email");
            email.setAttribute('data-checkout', 'email');
            email.setAttribute('value', pemail);
            fieldSet.appendChild(email);

            var payment_method_id = document.createElement("input");
            payment_method_id.setAttribute('type', "hidden");
            payment_method_id.setAttribute('name', "email");
            payment_method_id.setAttribute('id', "email");
            payment_method_id.setAttribute('data-checkout', 'payment_method_id');
            payment_method_id.setAttribute('value', ppayment_method_id);
            fieldSet.appendChild(payment_method_id);
            f.appendChild(fieldSet);
            resolve(f);
        });
    },
    getIPRequest() {
        return new Promise((resolve, reject) => {
            axios
                .get(constantes.URL_GET_IP)
                .then((response) => {
                    console.log("Response IP", response.data.ip);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("Reject", error);
                    reject(error);
                });
        });
    },
    GetCardType(number) {
        // visa
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "VISA";

        // Mastercard 
        // Updated for Mastercard 2017 BINs expansion
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
            return "MASTERCARD";

        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "AMEX";

        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "DISCOVER";

        // Diners
        re = new RegExp("^36");
        if (number.match(re) != null)
            return "DINERS";

        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return "DINERS - CARTE BLANCHE";

        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return "JCB";

        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return "VISA ELECTRON";

        return "";
    },
    DetectCardType(number) {
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        }

        for (var key in re) {
            if (re[key].test(number)) {
                return key
            }
        }
    },
    GetTrackCode(code) {
        return new Promise((resolve, reject) => {
            let LBody = {
                code: code
            }
            axios
                .post(constantes.WEBSITEAPI + constantes.PATH_GET_TRACKING_CODE, LBody)
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

};

export default UTILIS_API 