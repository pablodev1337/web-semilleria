const productos = document.querySelectorAll(".producto");
const modal = document.getElementById("modal-producto");

const modalImg = document.getElementById("modal-imagen");
const modalNombre = document.getElementById("modal-nombre");
const modalDesc = document.getElementById("modal-descripcion");
const cerrar = document.getElementById("cerrar-modal");

productos.forEach(prod => {
    prod.addEventListener("click", () => {
        modalImg.src = prod.dataset.imagen;
        modalNombre.textContent = prod.dataset.nombre;
        modalDesc.textContent = prod.dataset.descripcion;
        modal.style.display = "flex";
    });
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

const btnSidebar = document.getElementById("btn-sidebar");
const sidebar = document.getElementById("sidebar");

btnSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("cerrada");
});

const botonesCat = document.querySelectorAll("#sidebar li");

botonesCat.forEach(btn => {
    btn.addEventListener("click", () => {
        const categoria = btn.dataset.cat;

        document.querySelectorAll(".producto").forEach(p => {
            p.style.display =
                categoria === "todos" || p.dataset.cat === categoria
                ? "block"
                : "none";
        });
    });
});
