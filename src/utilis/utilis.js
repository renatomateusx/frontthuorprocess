import API_NOTIFICATION from "../api/notification";
var UTILIS = {
  isValidCPF(strCPF) {
    //console.log(strCPF);
    strCPF = this.removeCPFCaractere(strCPF);
    var Soma;
    var Resto;
    Soma = 0;
    if (!strCPF) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu CPF', 'error'); return false; }
    if (strCPF.length == undefined) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu CPF', 'error'); return false; }
    if (strCPF.length < 11) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu CPF corretamente', 'error'); return false; }
    if (strCPF == "00000000000") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "11111111111") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "22222222222") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "33333333333") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "44444444444") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "55555555555") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "66666666666") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "77777777777") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "88888888888") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    else if (strCPF === "99999999999") { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    for (var i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }

    Soma = 0;
    for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) { API_NOTIFICATION.showNotificationW('Oops', 'CPF Inválido', 'error'); return false; }
    //console.log("Retornando true");
    return true;
  },
  removeCPFCaractere(cpf) {
    return cpf.replace('.', '').replace('.', '').replace('-', '');
  }
  ,
  isValidTelefone(telefone) {
    if (!telefone) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu telefone', 'error'); return false; }
    if (telefone.length == undefined) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu telefone', 'error'); return false; }
    if (telefone.length == 0) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu telefone', 'error'); return false; }
    telefone = this.removeTelefoneCaracteres(telefone);
    if (telefone.length < 11) { API_NOTIFICATION.showNotificationW('Oops', 'Telefone Inválido', 'error'); return false; }
    return true;
  },
  removeTelefoneCaracteres(telefone) {
    return telefone.replace('-', '').replace('(', '').replace(')', '').replace(' ', '');
  },
  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu E-mail', 'error'); return false; }
    if (email.length == undefined) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu E-mail', 'error'); return false; }
    if (email.length == 0) { API_NOTIFICATION.showNotificationW('Oops', 'Informe seu E-mail', 'error'); return false; }
    if (!re.test(String(email).toLowerCase())) { API_NOTIFICATION.showNotificationW('Oops', 'E-mail Inválido', 'error'); return false; }
    return re.test(String(email).toLowerCase());
  },
  maskCPF(cpf) {
    if (cpf.length == 3) {
      return cpf + '.';
    }
    if (cpf.length == 6) {
      return cpf + '.';
    }
    if (cpf.length == 9) {
      return cpf + '-';
    }
  },
  isValidName(name) {
    if (!name) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu nome', 'error'); return false; }
    if (name.length == undefined) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu nome', 'error'); return false; }
    if (name.length < 5) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha seu nome completo', 'error'); return false; }
    return true;
  },
  isValidString(string, length, campo) {
    if (!string) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha ' + campo, 'error'); return false; }
    if (!string.length == undefined) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha ' + campo, 'error'); return false; }
    if (string.length == 0) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha ' + campo + ' corretamente', 'error'); return false; }
    if (string.length < length) { API_NOTIFICATION.showNotificationW('Oops', 'Preencha ' + campo + ' corretamente', 'error'); return false; }

    return true;
  },
  getRandomStringEmail() {
    let r = Math.random().toString(36).substring(11);
    return r;
  },
  sleep(seconds) {
    return new Promise(r => setTimeout(r, seconds));
  }
}
export default UTILIS 