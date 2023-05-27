document.addEventListener("DOMContentLoaded", function() {
  const modoBtn = document.getElementById("modo-btn");
  modoBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    cambiarImagen();
    guardarModo();
  });

  cargarModo();

  function cambiarImagen() {
    const logoImage = document.getElementById("logo");

    if (document.body.classList.contains("dark-mode")) {
      logoImage.src = "./img/mandoblanco.png"; // Ruta de la imagen en modo oscuro
    } else {
      logoImage.src = "./img/mando.png"; // Ruta de la imagen en modo claro
    }
  }

  function guardarModo() {
    const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    localStorage.setItem("modo", modo);
  }

  function cargarModo() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      const modoGuardado = localStorage.getItem(`${userName}-modo`);
  
      if (modoGuardado === "oscuro") {
        document.body.classList.add("dark-mode");
        cambiarImagen(); // Cambiar la imagen al cargar en modo oscuro
      }
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

    guardarMenuColor(color);
  });

  fontColorSelector.addEventListener("change", function() {
    const color = fontColorSelector.value;
    const links = document.querySelectorAll("a");

    links.forEach(function(link) {
      link.style.color = color;
    });

    guardarFontColor(color);
  });

  function guardarMenuColor(color) {
    localStorage.setItem("menuColor", color);
  }

  function guardarFontColor(color) {
    localStorage.setItem("fontColor", color);
  }
});








document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `¡Hola, ${userName}!`;
    cargarAjustesPersonalizados(userName);
  } else {
    userDisplay.textContent = 'Sin identificar';
  }
});

function saveUserName() {
  const userNameInput = document.getElementById('user-name-input');
  const userName = userNameInput.value;
  console.log('userName ingresado:', userName);
  localStorage.setItem('userName', userName);

  const userDisplay = document.getElementById('user-display');
  userDisplay.textContent = `¡Hola, ${userName}!`;

  guardarAjustesPersonalizados(userName);
}

function guardarAjustesPersonalizados(userName) {
  const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem(`${userName}-modo`, modo);

  const menuColor = localStorage.getItem("menuColor");
  localStorage.setItem(`${userName}-menuColor`, menuColor);

  const fontColor = localStorage.getItem("fontColor");
  localStorage.setItem(`${userName}-fontColor`, fontColor);
}



document.addEventListener("DOMContentLoaded", function() {
  const restaurarBtn = document.getElementById("restaurar-btn");

  restaurarBtn.addEventListener("click", function() {
    // Restaurar valores por defecto
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("modo");

    const menu = document.querySelector(".menu");
    menu.style.backgroundColor = "";
     localStorage.removeItem("menuColor");

    const links = document.querySelectorAll("a");
    links.forEach(function(link) {
      link.style.color = "";
    });
    localStorage.removeItem("fontColor");

    const userNameInput = document.getElementById('user-name-input');
    userNameInput.value = "";
    localStorage.removeItem('userName');

    const userDisplay = document.getElementById('user-display');
    userDisplay.textContent = 'Sin identificar';

    // Eliminar ajustes personalizados del usuario
    eliminarAjustesPersonalizados(userName);
  });
});


function eliminarAjustesPersonalizados(userName) {
  localStorage.removeItem(`${userName}-modo`);
  localStorage.removeItem(`${userName}-menuColor`);
  localStorage.removeItem(`${userName}-fontColor`);
}





function cargarAjustes() {
  const cargarInput = document.getElementById('cargar-input');
  const userName = cargarInput.value.trim(); // Eliminar espacios en blanco al inicio y al final del nombre
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `¡Hola, ${userName}!`;
    cargarAjustesPersonalizados(userName);
    cargarInput.classList.remove('error'); // Remover la clase de error si existía previamente
  } else {
    cargarInput.classList.add('error');
    userDisplay.textContent = 'Sin identificar';
  }
}

const cargarBtn = document.getElementById('cargar-btn');
cargarBtn.addEventListener('click', cargarAjustes);

function cargarAjustesPersonalizados(userName) {
  const modoGuardado = localStorage.getItem(`${userName}-modo`);
  const menuColorGuardado = localStorage.getItem(`${userName}-menuColor`);
  const fontColorGuardado = localStorage.getItem(`${userName}-fontColor`);

  if (modoGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const menu = document.querySelector(".menu");
  menu.style.backgroundColor = menuColorGuardado;

  const links = document.querySelectorAll("a");
  links.forEach(function(link) {
    link.style.color = fontColorGuardado;
  });
}












