var vida = 100;
var dano = 10;
var powerups = 0;

function tomarDano() {
    vida -= 10;
    atualizarStats();
}

function curar() {
    vida += 10;
    atualizarStats();
}

function evoluir() {
    dano += 5;
    powerups++;
    atualizarStats();
}

function atualizarStats() {
    document.getElementById("vida").innerText = vida;
    document.getElementById("dano").innerText = dano;
    document.getElementById("powerups").innerText = powerups;
}