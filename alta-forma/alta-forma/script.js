document.addEventListener("DOMContentLoaded", function () {

    carregarParte("header", "include.php?parte=header");
    carregarParte("footer", "include.php?parte=footer");

});

function carregarParte(id, arquivo) {

    const elemento = document.getElementById(id);

    if (!elemento) {
        console.error("Elemento não encontrado: #" + id);
        return;
    }

    fetch(arquivo)
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error(
                    "Não foi possível carregar " + arquivo
                );
            }

            return resposta.text();
        })

        .then(function (conteudo) {
            elemento.innerHTML = conteudo;
        })

        .catch(function (erro) {
            console.error(erro);
        });

}