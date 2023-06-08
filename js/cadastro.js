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

function validaLogin() {
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;
  
    if (username === 'admin' && password === '123456') {
      
      window.location.href = './deuCerto.html';
      return false;
    } else {
      alert('Usuario ou senha invalidas!');
      return false;
    }
  }
  
// iniciaLocalStorage()
iniciaLocalStorage()
