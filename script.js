const answers = document.querySelectorAll(".answer");
answers.forEach((answer) => {
  answer.style.display = "none"; // ocultar o texto inicialmente
  const question = answer.previousElementSibling;
  const arrow = question.querySelector(".rotate");

  question.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block"; // mostrar a resposta quando clicar no título
      arrow.style.transform = "rotate(180deg)"; // girar a imagem de seta
      answer.previousElementSibling.style.color = "black"; // muda a cor do texto do título para preto quando clicado
    } else {
      answer.previousElementSibling.style.color = "hsl(240deg 3% 72%)"; // muda a cor do texto do título para preto quando clicado
      answer.style.display = "none"; // ocultar a resposta quando clicar novamente no título
      arrow.style.transform = "rotate(0deg)"; // girar a imagem de seta de volta à posição original
    }
  });
});
