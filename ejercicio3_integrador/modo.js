document.getElementById("modoClaro").addEventListener("click", function () {
  document.body.classList.add("modo-claro");
  document.body.classList.remove("modo-oscuro");

  document.querySelector("nav").classList.remove("modo-oscuro");
  document.querySelector("footer").classList.remove("modo-oscuro");
});

document.getElementById("modoOscuro").addEventListener("click", function () {
  document.body.classList.add("modo-oscuro");
  document.body.classList.remove("modo-claro");

  document.querySelector("nav").classList.add("modo-oscuro");
  document.querySelector("footer").classList.add("modo-oscuro");
});
