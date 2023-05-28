document.addEventListener("DOMContentLoaded", function() {
  const modoBtn = document.getElementById("modo-btn");
  modoBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    cambiarImagen();
    guardarModo();
  });

  cargarModo();

  /*Funcion que cambia la imagen superior de la izquierda (el mando), cambiando
  entre imagenes que se ajustan mejor al modo oscuro o al modo claro dependiendo
  de cual de los dos sea activado */
  function cambiarImagen() {
    const logoImage = document.getElementById("logo");

    if (document.body.classList.contains("dark-mode")) {
      logoImage.src = "./img/mandoblanco.png"; // Ruta de la imagen en modo oscuro
    } else {
      logoImage.src = "./img/mando.png"; // Ruta de la imagen en modo claro
    }
  }

  /*Funcion que guarda el modo en el que se encuentra la pagina en el localStorage, 
  ya sea el modo oscuro o el modo claro */
  function guardarModo() {
    const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    localStorage.setItem("modo", modo);
  }

  /*Funcion que carga uno de los modos solo si existe previamente, habiendo sido
  guardado en el localStorage */
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




/* Funcion que obtiene los valores númericos ingresados en los respectivos campos,
los convierte en numeros enteros y los guarda en el localStorage*/
function guardarJuegosJugadosYDeseados(userName) {
  const juegosJugadosInput = document.getElementById('juegos-jugados-input');
  const juegosDeseadosInput = document.getElementById('juegos-deseados-input');

  const juegosJugados = parseInt(juegosJugadosInput.value);
  const juegosDeseados = parseInt(juegosDeseadosInput.value);

  localStorage.setItem(`${userName}-juegosJugados`, juegosJugados);
  localStorage.setItem(`${userName}-juegosDeseados`, juegosDeseados);
}






/*Esta parte se encarga de cargar los colores que hayan sido guardados con
localStorage y los aplica tanto al menú como a los enlaces del menú. Tambien es 
el que permite al usuario seleccionar nuevos colores con los selectores y guardar
esos cambios para que permanezcan*/ 
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




/* Este codigo se encarga de cargar loss valores numericos tanto de los 
juegos terminados como de los juegos que quieres jugar del localStorage, verificando
si hay un usuario almacenado */
document.addEventListener('DOMContentLoaded', function() {
  const juegosJugadosInput = document.getElementById('juegos-jugados');
  const juegosDeseadosInput = document.getElementById('juegos-objetivo');

  const juegosJugados = localStorage.getItem('juegosJugados');
  const juegosDeseados = localStorage.getItem('juegosDeseados');

  if (juegosJugados && juegosDeseados) {
    juegosJugadosInput.value = juegosJugados;
    juegosDeseadosInput.value = juegosDeseados;
  }

  const userName = localStorage.getItem('userName');
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `Usuario: ${userName}`;
    cargarAjustesPersonalizados(userName);
  } else {
    userDisplay.textContent = 'Sin identificar';
  }
});


/* Esta funcion obtiene los valores de juegosjugados y juegos-objetivo
y los almacena en localStorage */
function guardarNumeroJuegos(userName) {
  const juegosJugadosInput = document.getElementById('juegos-jugados');
  const juegosDeseadosInput = document.getElementById('juegos-objetivo');

  const juegosJugados = parseInt(juegosJugadosInput.value);
  const juegosDeseados = parseInt(juegosDeseadosInput.value);

  localStorage.setItem(`${userName}-juegosJugados`, juegosJugados);
  localStorage.setItem(`${userName}-juegosDeseados`, juegosDeseados);
}


/*Esta codigo verifica si hay un nombre de usuario almacenado en el
localStorage, cargando diferentes ajustes si lo encuentra  */
document.addEventListener('DOMContentLoaded', function() {
  const userName = localStorage.getItem('userName');
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `Usuario: ${userName}`;
    cargarAjustesPersonalizados(userName);
    cargarNumeroJuegos(userName);
    cargarNumeroJuegosVerde(userName);
  } else {
    userDisplay.textContent = 'Sin identificar';
  }
});


/*Esta funcion guarda el nombre de un usuario ingresado en el cuadro
de texto en el localStorage y tambien guarda ciertos ajustes */
function saveUserName() {
  const userNameInput = document.getElementById('user-name-input');
  const userName = userNameInput.value;
  console.log('userName ingresado:', userName);
  localStorage.setItem('userName', userName);

  const userDisplay = document.getElementById('user-display');
  userDisplay.textContent = `Usuario: ${userName}`;

  guardarAjustesPersonalizados(userName);
  guardarNumeroJuegos(userName);
  guardarNumeroJuegosVerde(userName);
}




/*Esta funcion guarda ciertos ajustes personalizados en el localStorage */
function guardarAjustesPersonalizados(userName) {
  const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem(`${userName}-modo`, modo);

  const menuColor = localStorage.getItem("menuColor");
  localStorage.setItem(`${userName}-menuColor`, menuColor);

  const fontColor = localStorage.getItem("fontColor");
  localStorage.setItem(`${userName}-fontColor`, fontColor);
}


/*Este codigo se encarga de restrablecer los valores por defecto de
los ajustes del usuario, incluyendo el modo, color del menu, color del texto
del menu y el nombre de usuario, además de eliminar cualquier otro ajuste personalizado */
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

    eliminarAjustesPersonalizados(userName);
  });
});

/*Esta funcion elimina algunos de los ajustes personalizados del usuario*/
function eliminarAjustesPersonalizados(userName) {
  localStorage.removeItem(`${userName}-modo`);
  localStorage.removeItem(`${userName}-menuColor`);
  localStorage.removeItem(`${userName}-fontColor`);
}



/*Esta funcion carga los ajustes y el nombre de usuario cuando se ingresa
un nombre que sea válido */
function cargarAjustes() {
  const cargarInput = document.getElementById('cargar-input');
  const userName = cargarInput.value.trim();
  const userDisplay = document.getElementById('user-display');

  if (userName) {
    userDisplay.textContent = `Usuario: ${userName}`;
    cargarAjustesPersonalizados(userName);
    guardarNombreUsuario(userName); 
    cargarInput.classList.remove('error'); 
  } else {
    cargarInput.classList.add('error');
    userDisplay.textContent = 'Sin identificar';
  }
}

/*Esta funcion carga y apllica los ajustes personalizados para un 
usuario especifico, obtenido del localStorage */
function cargarAjustesPersonalizados(userName) {
  const modoGuardado = localStorage.getItem(`${userName}-modo`);
  const menuColorGuardado = localStorage.getItem(`${userName}-menuColor`);
  const fontColorGuardado = localStorage.getItem(`${userName}-fontColor`);

  if (modoGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
    cambiarImagen();
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


/*Esta funcion maneja ciertos ajustes personalizados, la asignación del nombre
de usuario y la actualización de la interfaz del usuario para mostrar el nombre
y los ajustes correspondientes al cargar la página y hacer clic en el botón
cargar*/
function cambiarImagen() {
  const logoImage = document.getElementById("logo");

  if (document.body.classList.contains("dark-mode")) {
    logoImage.src = "./img/mandoblanco.png";
  } else {
    logoImage.src = "./img/mando.png";
  }
}

function guardarNombreUsuario(userName) {
  localStorage.setItem('userName', userName);
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

const cargarBtn = document.getElementById('cargar-btn');
cargarBtn.addEventListener('click', cargarAjustes);












