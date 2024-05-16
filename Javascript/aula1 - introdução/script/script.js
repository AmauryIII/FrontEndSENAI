// console.log("Amaury");

//caixas de texto
// alert("Amaury");

// prompt("Qual é o seu nome?");

// confirm("Deseja baixar novamente?");

// var varTest = 0
// varTest = 20

// const constTest = 0
// let letTest = 1



// console.log(varTest);
// console.log(constTest);
// console.log(letTest);

function nome(){
var nome = prompt("Qual o seu nome")
alert(`Seja bem vindo ${nome} Aproveite a estadia`)
alert("Seja bem vindo"+nome+" Aproveite a estadia")
}


function somar(){
    var numero1 = Number(prompt("Qual é o primeiro número?"))
var numero2 = Number(prompt("Qual é o segundo número?"))

var resultado = numero1 + numero2
alert(resultado)
}

//parametro = são identificadores dos valores passados dentro do parenteses
function produto(valor, nome){
    alert(`Este produto vale : ${valor}`)
    alert(`O nome do produto : ${nome}`)
}