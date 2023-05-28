
/*Este codigo se encarga de abrir y cerrar el modal/panel de información
cuando se hace clic en los botones indicados */
document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.querySelector(".modal-link");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    openModalBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
});