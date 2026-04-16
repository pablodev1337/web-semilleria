document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".imagenes-sobre img");
    const modal = document.getElementById("modal-sobre");
    const modalImg = document.getElementById("img-ampliada-sobre");
    const modalDesc = document.getElementById("desc-ampliada-sobre");
    const cerrar = document.querySelector(".cerrar-sobre");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalDesc.textContent = img.alt;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});