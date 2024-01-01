function hide() {
  const other = document.querySelectorAll(".ufo");
  other.forEach((element) => {
    element.style.visibility = "hidden";
  });
}

const watch = document.getElementById("ufo5");
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "style") {
      const visibility = window
        .getComputedStyle(watch)
        .getPropertyValue("visibility");
      if (visibility === "visible") {
        hide();
      }
    }
  });
});

observer.observe(watch, { attributes: true });

const follow = document.getElementById("ufo5");
document.addEventListener("mousemove", (e) => {
  follow.style.left = e.pageX + "px";
  follow.style.top = e.pageY + "px";
});
