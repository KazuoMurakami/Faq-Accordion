const answer = document.querySelectorAll(".answer");

answer.forEach((answer) => {
  answer.style.display = "none";
  const question = answer.previousElementSibling; // aqui está pegando o elemento irmao do <P> que seria o <h2>
  const arrow = question.querySelector(".rotate"); // estou selecionando a classe rotate que está no h2 que seria a question

  question.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      arrow.style.transform = "rotate(180deg)"; // poderia utilizar um addclass também para esse evento
      question.style.color = "black"; // adiciona cor preta quando eu clicar no h2
    } else {
      question.style.color = "hsl(240deg 3% 72%)";
      answer.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
