const criptografarButton = document.getElementById("button-one")
const containerResposta=  document.getElementById("answer-box")

function criptografar() {
  var resultado = document.getElementById("editor_area").value;

  var resultado2 = resultado.toLowerCase();

  var resultado3 = resultado2
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    containerResposta.innerHTML = resultado3;
}

function descriptografar() {
  var resultado4 = document.getElementById("editor_area").value;

  var resultado5 = resultado4.toLowerCase();

  var resultado6 = resultado5
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    containerResposta.innerHTML =resultado6;

}
  
