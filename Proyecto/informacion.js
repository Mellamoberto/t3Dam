
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