const faqContainers = document.querySelectorAll(".faq-container");

faqContainers.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answerContainer = faq.querySelector(".answer-container");
  const linksInAnswer = answerContainer.querySelectorAll("a");

  question.addEventListener("click", () => {
    closeOtherAnswers(faqContainers, faq);
    toggleAnswer(question, answerContainer, linksInAnswer);
  });

  question.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      closeOtherAnswers(faqContainers, faq);
      toggleAnswer(question, answerContainer, linksInAnswer);
    }
  });

  // Initially disable tabindex for links in answers
  linksInAnswer.forEach((link) => {
    link.setAttribute("tabindex", "-1");
  });
});

function toggleAnswer(question, answerContainer, linksInAnswer) {
  const isActive = question.classList.toggle("active");

  if (isActive) {
    answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
    linksInAnswer.forEach((link) => {
      link.removeAttribute("tabindex");
    });
    answerContainer.focus();
  } else {
    answerContainer.style.maxHeight = 0;
    linksInAnswer.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
  }
}

function closeOtherAnswers(containers, currentContainer) {
  containers.forEach((container) => {
    const question = container.querySelector(".question");
    const answerContainer = container.querySelector(".answer-container");
    const linksInAnswer = answerContainer.querySelectorAll("a");

    if (
      container !== currentContainer &&
      question.classList.contains("active")
    ) {
      question.classList.remove("active");
      answerContainer.style.maxHeight = 0;
      linksInAnswer.forEach((link) => {
        link.setAttribute("tabindex", "-1");
      });
    }
  });
}
