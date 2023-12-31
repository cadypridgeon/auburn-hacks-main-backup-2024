// Simple script to scroll to a specific element on the page.
// Usage: <a href="#" onclick="smoothScroll('id')">Click me</a>
function smoothScroll(id) {
  document.getElementById(`${id}`).scrollIntoView({
    behavior: "smooth",
  });
}
