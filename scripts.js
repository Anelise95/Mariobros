const form = document.querySelector(".fale-conosco");
const mascara = document.querySelector(".mascara-form");

function cliqueiNoBotao() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function esconderForm() {
  form.style.left = "-330px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}