/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele OK
  Passo 2 - identificar o clique no botão OK
  Passo 3 - adicionar a classe ativo nos projetos escondidos OK

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele *
*/

const botaoMostrarProjetos = window.document.querySelector(".btn-mostrar-projetos");
const listaEscondidos = window.document.querySelectorAll(".projeto:not(.ativo)");

function mostrarMaisProjetos() {

    listaEscondidos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
        botaoMostrarProjetos.innerText = "Mostrar menos";
    });

    botaoMostrarProjetos.removeEventListener("click", mostrarMaisProjetos);
    botaoMostrarProjetos.addEventListener("click", mostrarMenosProjetos);

}

function mostrarMenosProjetos() {

    listaEscondidos.forEach(projetoInativo => {
        projetoInativo.classList.remove("ativo");
        botaoMostrarProjetos.innerText = "Mostrar mais";
    });

    botaoMostrarProjetos.removeEventListener("click", mostrarMenosProjetos);
    botaoMostrarProjetos.addEventListener("click", mostrarMaisProjetos);

}

botaoMostrarProjetos.addEventListener("click", mostrarMaisProjetos);
