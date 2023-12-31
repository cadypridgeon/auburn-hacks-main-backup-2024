function generateStar() {
  const star = document.createElement("div");

  const size = Math.random() * 3 + 2;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const duration = Math.random() * 4 + 2;
  const delay = Math.random() * 4;

  star.className = "star";
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${top}%`;
  star.style.left = `${left}%`;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;

  return star;
}

function generateStars() {
  let num = window.innerWidth * 0.2;
  const container = document.getElementById("stars");

  for (let i = 0; i < num; i++) {
    const star = generateStar();
    container.appendChild(star);
  }
}

window.addEventListener("load", generateStars);
