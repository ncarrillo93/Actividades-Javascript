var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");

var resultado = document.getElementById("resultado")

var    inputUno    =    document.getElementById("input-uno");
var    inputDos     =   document.getElementById("input-dos");

suma.addEventListener("click",function(){
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;
    resultado.innerHTML  =  parseInt(n1)+parseInt(n2);
});
resta.addEventListener("click",function(){
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;
    resultado.innerHTML  =  parseInt(n1) - parseInt(n2);
});
multiplicacion.addEventListener("click",function(){
    var  n1  =  inputUno.value;
    var  n2  =  inputDos.value;
    resultado.innerHTML  =  parseInt(n1) * parseInt(n2);
});
division.addEventListener("click",function(){
    let  n1  = inputUno.value;
    let  n2  = inputDos.value;
    resultado.innerHTML  =  parseInt(n1) / parseInt(n2);
});