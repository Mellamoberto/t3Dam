
/*Este script sirve para generar y mostrar un genero aleatorio de videojuego*/ 
const generos = [
    'Acción',
    'Aventura',
    'Rol',
    'Simulador',
    'Deportes',
    'Shooters',
    'Puzles y estrategia',
    'Plataformas',
    'Mundo abierto',
    'RPG',
    'Terror',
    'Carreras'
  ];
  
  const generarBtn = document.getElementById('generar-btn');
  const generoAleatorio = document.getElementById('genero-aleatorio');
  
  generarBtn.addEventListener('click', function() {
    const genero = obtenerGeneroAleatorio();
    generoAleatorio.textContent = genero;
  });
  
  function obtenerGeneroAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * generos.length);
    return generos[indiceAleatorio];
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const generosList = document.getElementById('generos-list');
    generos.forEach(function(genero) {
      const listItem = document.createElement('li');
      listItem.textContent = genero;
      generosList.appendChild(listItem);
    });
  
    const generarBtn = document.getElementById('generar-btn');
    const generoAleatorio = document.getElementById('genero-aleatorio');
  
    generarBtn.addEventListener('click', function() {
      const genero = obtenerGeneroAleatorio();
      generoAleatorio.textContent = genero;
    });
  });