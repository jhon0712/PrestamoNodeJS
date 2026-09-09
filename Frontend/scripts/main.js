const formulario = document.getElementById("formularioPrestamo");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const prestamo = parseFloat(document.getElementById("prestamo").value);
    const meses = parseInt(document.getElementById("meses").value);
    const interes = parseFloat(document.getElementById("interes").value);

    const datos = {
        nombre: nombre,
        prestamo: prestamo,
        meses: meses,
        interes: interes
    };

    const datosJson = JSON.stringify(datos);

    console.log(datosJson);

    fetch("http://localhost:3000/prestamo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: datosJson
    })
    .then(response => response.json())
    .then(resultado => {

        document.getElementById("resultado").value =
            resultado.nombre +
            " – $" + resultado.cuota.toFixed(2) +
            " -- $" + resultado.prestamo.toFixed(2) +
            " -- " + resultado.meses + " meses" +
            " -- interés " + (resultado.interes * 100).toFixed(2) + "%";

    })
    .catch(error => {
        console.error("Error:", error);
        alert("No se pudo conectar con el Backend.");
    });
});