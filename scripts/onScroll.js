let images = document.getElementsByClassName("image");
images = Array.from(images);

let lastScrollPosition = 0;

window.onscroll = () => {
  const top = window.scrollY;

  if (top > lastScrollPosition) {
    images.forEach((image) => {
      let offset = image.offsetTop - 200;

      if (top >= offset) {
        image.classList.add("show-animate");
      }
    });
  } else {
    images.forEach((image) => {
      let offset = image.offsetTop;

      if (top <= offset) {
        image.classList.remove("show-animate");
      }
    });
  }

  lastScrollPosition = top <= 0 ? 0 : top;
};
