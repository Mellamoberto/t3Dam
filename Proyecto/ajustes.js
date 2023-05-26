document.addEventListener("DOMContentLoaded", function() {
    const modoBtn = document.getElementById("modo-btn");
    if (modoBtn) {
      modoBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        // Guardar el modo en localStorage
        localStorage.setItem("modo", document.body.classList.contains("dark-mode") ? "oscuro" : "claro");
      });
    }

    cargarModo();

    guardarModo();
  
    

      function guardarModo() {
        const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
        localStorage.setItem("modo", modo);
      }


      function cargarModo() {
        const modoGuardado = localStorage.getItem("modo");
    
        if (modoGuardado === "oscuro") {
          document.body.classList.add("dark-mode");
        }
      }
    });





    document.addEventListener("DOMContentLoaded", function() {
        const storedMenuColor = localStorage.getItem("menuColor");
        const storedFontColor = localStorage.getItem("fontColor");
      
        if (storedMenuColor) {
          const menu = document.querySelector(".menu");
          menu.style.backgroundColor = storedMenuColor;
        }
      
        if (storedFontColor) {
          const links = document.querySelectorAll("a");
          links.forEach(function(link) {
            link.style.color = storedFontColor;
          });
        }
      
        const menuColorSelector = document.getElementById("menu-color-selector");
        const fontColorSelector = document.getElementById("font-color-selector");
      
        menuColorSelector.addEventListener("change", function() {
          const color = menuColorSelector.value;
          const menu = document.querySelector(".menu");
      
          menu.style.backgroundColor = color;
      
          // Guardar el color en localStorage
          localStorage.setItem("menuColor", color);
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
      });





document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    var usernameInput = document.getElementById("usernameInput");
    var nombreUsuarioElement = document.getElementById("nombreUsuario");
  
    // Cargar el nombre de usuario guardado en localStorage
    cargarNombreUsuario();
  
    // Actualizar el nombre de usuario en localStorage cuando se envíe el formulario
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      var username = usernameInput.value.trim();
  
      if (username !== "") {
        localStorage.setItem("username", username);
        nombreUsuarioElement.textContent = username;
        actualizarNombreUsuarioEnPaginas(username);
      } else {
        localStorage.removeItem("username");
        nombreUsuarioElement.textContent = "sin identificar";
        actualizarNombreUsuarioEnPaginas("sin identificar");
      }
    });
  
    // Función para actualizar el nombre de usuario en todas las páginas
    function actualizarNombreUsuarioEnPaginas(nombre) {
      var nombreUsuarioElements = document.getElementsByClassName("nombre-usuario");
      for (var i = 0; i < nombreUsuarioElements.length; i++) {
        nombreUsuarioElements[i].textContent = nombre;
      }
    }
  
    function cargarNombreUsuario() {
        var nombreUsuario = localStorage.getItem("username");
        if (nombreUsuario) {
          nombreUsuarioElement.textContent = nombreUsuario;
          actualizarNombreUsuarioEnPaginas(nombreUsuario);
        } else {
          nombreUsuarioElement.textContent = "sin identificar";
          actualizarNombreUsuarioEnPaginas("sin identificar");
        }
      }
  });