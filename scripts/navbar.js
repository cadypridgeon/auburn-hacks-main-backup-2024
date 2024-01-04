let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    document.querySelector(".navbar").classList.remove("show");
    document.querySelector(".navbar").classList.add("hidden");
  } else {
    document.querySelector(".navbar").classList.add("show");
    document.querySelector(".navbar").classList.remove("hidden");
  }

  prevScrollPos = currentScrollPos;
});

const menuCheckbox = document.querySelector("#menu-checkbox");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menu-toggle");
const menuItems = document.querySelectorAll("#menu a");

function hideMenu() {
  setTimeout(() => {
    menuToggle.style.width = "0";
    menuToggle.style.height = "100%";
    menuCheckbox.checked = false; // Uncheck the checkbox to reflect the menu state
    // Remove event listeners from menu items
    menuItems.forEach((item) => {
      item.removeEventListener("click", hideMenu);
    });
  }, 100);
}

function reattachMenuListeners() {
  menuItems.forEach((item) => {
    item.addEventListener("click", hideMenu);
  });
}

menuCheckbox.addEventListener("change", function () {
  if (this.checked) {
    setTimeout(() => {
      menuToggle.style.width = "100vw";
      menuToggle.style.height = "100vh";
      reattachMenuListeners(); // Reattach event listeners when menu is displayed
    }, 0);
  } else {
    hideMenu();
  }
});

reattachMenuListeners();

function closeAndScroll(id) {
  smoothScroll(id);
  menuCheckbox.click();
}
