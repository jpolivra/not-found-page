const checkBtn = document.querySelector("span.check");
const paragrafoFooter = document.querySelector("footer p");
function changeColor() {
  paragrafoFooter.classList.toggle("ativo");
}
checkBtn.addEventListener("click", changeColor);
