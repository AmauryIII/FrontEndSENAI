class Carro {
    constructor(marca,modelo,cor,velMax){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velMax = velMax;
        this.ano = 2024;
        this.velAtual = 0;
    }

    acelerar(km){
        if(km <= this.velMax){
            this.velAtual += km
            alert("Você acelerou o carro")
        }else{
            this.velAtual = this.velMax
            alert("Operação não autorizada! Velocidade máxima atingida!")
        }
        return "Acelerei :)"
    }
}

var teste = new Carro("Fiat","Toro","vermelho",120)