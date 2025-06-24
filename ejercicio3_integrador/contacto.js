document.getElementById("Formcontacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const respuesta = document.getElementById("respuestamensaje");

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!nombre || !email || !mensaje) {
    respuesta.textContent = "Por favor, completá todos los campos";
    respuesta.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    respuesta.textContent = "Email ingresado no valido.";
    respuesta.style.color = "red";
    return;
  }

  respuesta.innerHTML = `Gracias por tu contacto, <strong>${nombre}</strong>. En breve te estaré respondiendo.`;
  respuesta.style.color = "green";

  // Resetea el form 
  this.reset();
});
