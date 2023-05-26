document.addEventListener("DOMContentLoaded", function() {
    const modoBtn = document.getElementById("modo-btn");
    const fontColorSelector = document.getElementById("font-color-selector");
    const menuColorSelector = document.getElementById("menu-color-selector");

    modoBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    fontColorSelector.addEventListener("change", function() {
        const color = fontColorSelector.value;
        const links = document.querySelectorAll("a");

        links.forEach(function(link) {
            link.style.color = color;
        });

        // Guardar el color en localStorage
        localStorage.setItem("fontColor", color);
    });

    menuColorSelector.addEventListener("change", function() {
        const color = menuColorSelector.value;
        const menu = document.querySelector(".menu");

        menu.style.backgroundColor = color;

        // Guardar el color en localStorage
        localStorage.setItem("menuColor", color);
    });

    // Recuperar los colores guardados en localStorage
    const storedFontColor = localStorage.getItem("fontColor");
    if (storedFontColor) {
        fontColorSelector.value = storedFontColor;

        const links = document.querySelectorAll("a");

        links.forEach(function(link) {
            link.style.color = storedFontColor;
        });
    }

    const storedMenuColor = localStorage.getItem("menuColor");
    if (storedMenuColor) {
        menuColorSelector.value = storedMenuColor;

        const menu = document.querySelector(".menu");

        menu.style.backgroundColor = storedMenuColor;
    }
});

function guardarNombreUsuario() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value.trim();
  
    if (username !== "") {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  
    actualizarNombreUsuario();
  }
  
  function actualizarNombreUsuario() {
    var nombreUsuario = localStorage.getItem("username");
    var nombreUsuarioElement = document.getElementById("nombreUsuario");
  
    if (nombreUsuario) {
      nombreUsuarioElement.textContent = nombreUsuario;
    } else {
      nombreUsuarioElement.textContent = "no-usuario";
    }
  }
  
  // Llamamos a la función para mostrar el nombre de usuario al cargar la página
  window.onload = function() {
    actualizarNombreUsuario();
  };