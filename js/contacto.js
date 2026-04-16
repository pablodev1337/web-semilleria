document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        localidad: document.getElementById("localidad").value,
        comentario: document.getElementById("comentario").value
    };

    localStorage.setItem("datosContacto", JSON.stringify(datos));

    alert("Datos enviados correctamente");
    this.reset();
});

document.getElementById("btnVerDatos").addEventListener("click", function() {
    const datos = JSON.parse(localStorage.getItem("datosContacto"));
    const contenedor = document.getElementById("datosGuardados");

    if (!datos) {
        contenedor.style.display = "block";
        contenedor.innerHTML = "<p>No hay datos guardados aún.</p>";
        return;
    }

    contenedor.style.display = "block";
    contenedor.innerHTML = `
        <h3>Datos guardados:</h3>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Email:</strong> ${datos.email}</p>
        <p><strong>Localidad:</strong> ${datos.localidad}</p>
        <p><strong>Comentario:</strong> ${datos.comentario}</p>
    `;
});
