var UTILIS = {
  isValidCPF(strCPF) {
    //console.log(strCPF);
    strCPF = this.removeCPFCaractere(strCPF);
    var Soma;
    var Resto;
    Soma = 0;
    if (!strCPF) return false;
    if(strCPF.length == undefined) return false;
    if(strCPF.length < 11) return false;
    if (strCPF == "00000000000") return false;
    else if (strCPF === "11111111111") return false;
    else if (strCPF === "22222222222") return false;
    else if (strCPF === "33333333333") return false;
    else if (strCPF === "44444444444") return false;
    else if (strCPF === "55555555555") return false;
    else if (strCPF === "66666666666") return false;
    else if (strCPF === "77777777777") return false;
    else if (strCPF === "88888888888") return false;
    else if (strCPF === "99999999999") return false;
    for (var i = 1; i <= 9; i++){
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    } 
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    console.log("Retornando true");
    return true;
  },
  removeCPFCaractere(cpf) {
    return cpf.replace('.', '').replace('.', '').replace('-', '');
  }
  ,
  isValidTelefone(telefone) {
    if (!telefone) return false;
    if (telefone.length == undefined) return false;
    telefone = this.removeTelefoneCaracteres(telefone);
    if (telefone.length < 11) return false;
    return true;
  },
  removeTelefoneCaracteres(telefone) {
    return telefone.replace('-', '').replace('(', '').replace(')', '').replace(' ', '');
  },
  isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  isValidName(name){
    if(!name) return false;
    if(name.length == undefined) return false;
    if(name.length <5) return false;
    return true;
  },
  isValidString(string, length){
    if(!string) return false;
    if(!string.length == undefined) return false;
    if(string.length == 0) return false;
    if(string.length < length) return false;
    
    return true;
  }
}
export default UTILIS 