document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  const formData = new FormData(e.target);

  // Envía los datos al Apps Script
  const response = await fetch("https://script.google.com/macros/s/AKfycbzzAKU37oiimjMAJbh2TSC0ag1A_kl4yjTr92GYNBfniP01B9ZUipvqlIGgHV02q5W_/exec", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    alert("Formulario enviado correctamente.");
    e.target.reset(); // Limpia el formulario
  } else {
    alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
  }
});


