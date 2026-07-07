let filmes = [];

function cadastrarFilme() {
    let nome = document.getElementById("nome").value;
    let ano = document.getElementById("ano").value;

    let filme = {
        nome: nome,
        ano: ano
    };

    filmes.push(filme);

    document.getElementById("nome").value = "";
    document.getElementById("ano").value = "";

    exibirFilmes();
}

function exibirFilmes() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let filme of filmes) {
        lista.innerHTML += `<p>${filme.nome} (${filme.ano})</p>`;
    }
}