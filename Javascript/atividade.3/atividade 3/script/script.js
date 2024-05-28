//arays filmes
// filme = 0:titulo, 1:descricao
var filmes = [
 ["Harry Potter","Um jovem bruxo"],
 ["Shrek","Um ogro e a sua princesa"],
 ["Star Wars", "Guerra nas estrelas"],
 ["Pup Fiction", "Filme Mafioso"], 
 ["Killbill", "Matador de aluguel"], 
 ["Vingadores", "Os super heróis mais fortes da terra"]
]

var gurpoFilmes = document.getElementById("grupoFilmes")



filmes.forEach(element => {
    gurpoFilmes.innerHTML +=`
    <div class="filmes">
    <h5>${element[0]}</h5>
    <p>${element[1]}</p>
    <button class="verMais">Ver Mais</button>
    </div>   `
});
