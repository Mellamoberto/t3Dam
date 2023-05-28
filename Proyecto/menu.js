const menuContainer = document.getElementById('menu-container');

menuContainer.innerHTML = `
<nav class="menu">
<div class="mando">
<img id="logo" src="./img/mando.png" alt="logo">
</div>

<button class="menu">
    <a class="menu" href="index.html">Daily-Plays</a>
</button>

<button class="menu">
    <a class="menu" href="./juego.html" target="_blank">Página para ver un juego</a>
</button>

<button class="menu">
<a class="modal-link" href="#">Información Web</a>
</button>

<button class="menu">
    <a class="menu" id="mensaje" href="#">XML</a>
</button>

<button class="menu">
    <a class="menu" href="./ajustes.html">Ajustes</a>
</button>

<div class="barraDeBusqueda">
<input type="text" id="search-input" placeholder="¿Qué videojuego buscas?" onkeypress="handleKeyPress(event)">
<input type="submit" value="Buscar" onclick="buscarVideojuego()">
</div>
</nav>



<div id="user-display"></div>
`;

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



function buscarVideojuego() {
    const searchTerm = document.getElementById("search-input").value;
    if (searchTerm.trim() !== "") {
        alert("Aún no se pueden buscar videojuegos. ¡Perdón por las molestias!");
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        buscarVideojuego();
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    const userDisplay = document.getElementById('user-display');
  
    if (userName) {
      userDisplay.textContent = `Usuario: ${userName}`;
      cargarAjustesPersonalizados(userName);
    } else {
      userDisplay.textContent = 'Sin identificar';
    }
  });
