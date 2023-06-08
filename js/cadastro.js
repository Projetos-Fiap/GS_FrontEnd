function iniciaLocalStorage(){
    localStorage.setItem("modoEscuro", 0);
}

function switchModos(){
    let body = document.querySelector(".body");
    let container = document.querySelector(".container");
    let form = document.querySelector(".form");
    let lampada = document.querySelector(".switch");

    if( localStorage.getItem("modoEscuro") == 1){
        localStorage.setItem("modoEscuro", 0);
        
        container.style.cssText = "display: flex;align-items: center;justify-content: center;width: auto;position: absolute;top: 0px;bottom: 0;left: 50px;right: 50px;background-color: white;";
        form.style.cssText = "display: flex;align-items: center;justify-content: center;width: 30%;height: 80%;border-style: solid;border-width: 1px;background-color: blanchedalmond;border-radius: 50px;color: black;";
        body.style.cssText = "background-color:blanchedalmond;padding-right: 10px;"
        lampada.src = "./imgs/apagada.png"
    } else {
        localStorage.setItem("modoEscuro", 1);

        container.style.cssText = "display: flex;align-items: center;justify-content: center;width: auto;position: absolute;top: 0px;bottom: 0;left: 50px;right: 50px;background-color: #252526;";
        form.style.cssText = "display: flex;align-items: center;justify-content: center;width: 30%;height: 80%;border-style: solid;border-width: 1px;background-color: #1E1E1E;border-radius: 50px;color: whitesmoke;";
        body.style.cssText = "background-color:#333332;padding-right: 10px;"
        lampada.src = "./imgs/acesa.png"
    }
        
}

function validaFirstName() {
  let campo = document.querySelector('.firstName');
  let p = document.querySelector(".errorFirstName");

  if (campo.value.trim().length === 0 || campo.value !== campo.value.trim()) {
    p.innerHTML = "Não é permitido espaços em branco";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else if (campo.value.trim().length < 5) {
    p.innerHTML = "Mínimo de 5 dígitos";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else {
    p.innerHTML = "";
    campo.style.cssText = "";
    return true;
  }
}

function validaSecondName() {
  let campo = document.querySelector('.secondName');
  let p = document.querySelector(".errorSecondName");

  if (campo.value.trim().length === 0 || campo.value !== campo.value.trim()) {
    p.innerHTML = "Não é permitido espaços em branco";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else if (campo.value.trim().length < 5) {
    p.innerHTML = "Mínimo de 5 dígitos";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else {
    p.innerHTML = "";
    campo.style.cssText = "";
    return true;
  }
}

function validaEmail() {
  let campo = document.querySelector('.email');
  let p = document.querySelector(".errorEmail");

  if (campo.value.trim().length === 0 || campo.value !== campo.value.trim()) {
    p.innerHTML = "Não é permitido espaços em branco";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else if (campo.value.trim().length < 5) {
    p.innerHTML = "Mínimo de 5 dígitos";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else if (!campo.value.includes("@")) {
    p.innerHTML = "O caractere @ é necessário";
    campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
    return false;
  } else {
    p.innerHTML = "";
    campo.style.cssText = "";
    return true;
  }
}

function validaPassword() {
    let campo = document.querySelector('.password');
    let p = document.querySelector(".errorPassword");
  
    if (campo.value.trim().length === 0) {
      p.innerHTML = "Campo obrigatório";
      campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
    } else if (campo.value.trim().length < 6 || campo.value.trim().length > 8) {
      p.innerHTML = "A senha deve ter entre 6 e 8 caracteres";
      campo.style.cssText = "border-style: solid;border-width: 3px;border-color: red;";
      return false;
    } else {
      p.innerHTML = "";
      campo.style.cssText = "";
      return true;
    }
}

function validaConfirmPassword(){
    let password = document.querySelector('.password');
    let confirmPassword = document.querySelector('.confirmPassword');
    let p = document.querySelector(".errorConfirmPassword");

    if( password.value.trim() !== confirmPassword.value.trim()){
        p.innerHTML = "As senhas devem ser iguais"
        return false;
    } else {
        p.innerHTML = ""
        return true;
     }
}

function validaCamposVazios(){
    let validacao = validaFirstName() & validaSecondName() & validaEmail() & validaPassword()  & validaConfirmPassword();

    if(validacao != 1){
        alert("Há campos com entradas inválidas!");
        return false;
    }

    return true;
}

// iniciaLocalStorage()
iniciaLocalStorage()
