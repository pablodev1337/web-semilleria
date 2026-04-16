const modalN = document.getElementById("modalNovedades");
const modalImgN = document.getElementById("modalImagenNovedades");
const modalTxtN = document.getElementById("modalTextoNovedades");
const cerrarN = document.getElementById("cerrarModalNovedades");

document.querySelectorAll(".zoom-novedades").forEach(img => {
    img.addEventListener("click", () => {
        modalImgN.src = img.src;
        modalTxtN.textContent = img.dataset.descripcion || "";
        modalN.style.display = "flex";
    });
});

cerrarN.addEventListener("click", () => {
    modalN.style.display = "none";
});

modalN.addEventListener("click", (e) => {
    if (e.target === modalN) modalN.style.display = "none";
});