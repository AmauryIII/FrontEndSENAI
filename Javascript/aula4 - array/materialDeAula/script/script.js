var filmes = ["Aranha"]
//metodo 2
var jogos = Array();
jogos[0] = "Mario";
jogos[1] = "Bioshock";

// adiciona na ultima posição
filmes.push("Harry Potter")
// adiciona na primeira posição
filmes.unshift("Vingadores")
// remove na ultima posição
filmes.pop("Aranha")
// remove na primeira posição
filmes.shift("")

// EDITAR MEIO ARRAY
filmes.push("Power Rangers")
filmes.push("Atividade Paranormal")
filmes.push("Nova onda do imperador")
filmes.push("Planeta dos macacos")
// editar no meio do array
// splice (indice, quantos ele vai mexer, qual informação a ser adicionada) *indice/quantidade/conteudo
filmes.splice(2,1)
//adicionado
filmes.splice(2,0,"Transformers")
//substituido
filmes.splice(3,1,"Bob Esponja")




var grupoFilmes = document.getElementById("grupoFilmes")

filmes.forEach(element => {
    grupoFilmes.innerHTML +=`
    <div class="filmes">
    <h5>${element}</h5>
    <button class="verMais">Ver Mais</button>
    </div>   `
});