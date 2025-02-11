document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  const formData = new FormData(e.target);

  // Envía los datos al Apps Script
  const response = await fetch("https://script.google.com/macros/s/AKfycbwEAR1zyrF4LmsbPzBMPk7PZei2r5_Emso0YxhXA-l13z4hdQ0433sqReuj4DseSjPH/exec", {
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


