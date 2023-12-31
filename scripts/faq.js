let faq = document.querySelectorAll(".faq-container");
// Loop through every element with the faq-container class
faq.forEach((faq) => {
  faq.addEventListener("click", (event) => {
    // Select all questions
    const question = faq.firstElementChild;
    // Select active question (if there is one)
    const active = document.querySelector(".question.active");
    // Select the arrow by clicked question
    const svg = question.lastElementChild;

    // If the element is already active and not the clicked element set it's height back to zero
    if (active && active != question) {
      active.classList.toggle("active");
      svg.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }

    // Show answer for clicked question
    question.classList.toggle("active");
    svg.classList.toggle("active");
    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
