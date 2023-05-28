/*Este script es el que forma el menú, y es colocado en todas las 
páginas para que el menú salga en la parte superior de la misma manera
siempre */

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
    <a class="menu" href="./juego.html">Página para ver un juego</a>
</button>

<button class="menu">
    <a class="menu" href="./juegoAleatorio.html">Elige NextVideogame</a>
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


/*Esta funcion provoca un alert cuando se intenta buscar un videojuego
en la barra de busqueda que esta al final del menú */
function buscarVideojuego() {
    const searchTerm = document.getElementById("search-input").value;
    if (searchTerm.trim() !== "") {
        alert("Aún no se pueden buscar videojuegos. ¡Perdón por las molestias!");
    }
}

/*Permite usar la barra de busqueda anterior tambien pulsando la tecla enter */
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


  /*Este codigo permite clicar y ver el boton XML que hay en el menú, y muestra
  el ejercicio de XML y XSL */
  const button = document.getElementById("mensaje");
  button.addEventListener("click", cargarPaginaXML);

  function cargarPaginaXML() {
    const url = "https://mellamoberto.github.io/EjercicioXML/XML/VinoTinto.xml";
    window.open(url, "_blank");

    document.body.appendChild(iframe);
  }
