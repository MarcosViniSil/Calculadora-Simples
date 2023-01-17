var num1 = document.getElementById("Numero1");
var num2 = document.getElementById("Numero2");
var resul = document.getElementById("resul");

function soma() {

       var som = Number(num1.value) + Number(num2.value);
       resul.innerHTML = som;
       num1.value = "";
       num2.value = "";
}

function subtrair() {

       var som = Number(num1.value) - Number(num2.value);
       resul.innerHTML = som;
       num1.value = "";
       num2.value = "";
}
function multi() {

       var som = Number(num1.value) * Number(num2.value);
       resul.innerHTML = som;
       num1.value = "";
       num2.value = "";
}

function Divi() {

       var som = Number(num1.value) / Number(num2.value);
       resul.innerHTML = som;
       num1.value = "";
       num2.value = "";
}
function Limpa() {

       num1.value = "";
       num2.value = "";
}
function Resto() {
       var som = Number(num1.value) % Number(num2.value);
       resul.innerHTML = som;
       num1.value = "";
       num2.value = "";
}

