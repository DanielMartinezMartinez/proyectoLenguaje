  function mostrarImagenesAleatorias() {
    const cartas = [
        {src: "../../img/juego/juegoNBA/carta1.png", puntuacion: 6 },
        {src: "../../img/juego/juegoNBA/carta2.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta3.png", puntuacion: 7 },
       {src: "../../img/juego/juegoNBA/carta4.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta5.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta6.png", puntuacion: 3 },
      {src: "../../img/juego/juegoNBA/carta7.png", puntuacion: 5 },
     {src: "../../img/juego/juegoNBA/carta8.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta9.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta10.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta11.png", puntuacion: 5 },
    {src: "../../img/juego/juegoNBA/carta12.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta13.png", puntuacion: 6 },
     {src: "../../img/juego/juegoNBA/carta14.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta15.png", puntuacion: 5 },
     {src: "../../img/juego/juegoNBA/carta16.png", puntuacion: 12 },
      {src: "../../img/juego/juegoNBA/carta17.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta18.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta19.png", puntuacion: 8 },
      {src: "../../img/juego/juegoNBA/carta20.png", puntuacion: 5 },
     {src: "../../img/juego/juegoNBA/carta21.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta22.png", puntuacion: 95 },
    {src: "../../img/juego/juegoNBA/carta23.png", puntuacion: 5 },
   {src: "../../img/juego/juegoNBA/carta24.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta25.png", puntuacion: 78 },
     {src: "../../img/juego/juegoNBA/carta26.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta27.png", puntuacion: 5 },
     {src: "../../img/juego/juegoNBA/carta28.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta29.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta30.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta31.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta32.png", puntuacion: 5 },
     {src: "../../img/juego/juegoNBA/carta33.png", puntuacion: 5 },
      {src: "../../img/juego/juegoNBA/carta34.png", puntuacion: 5 },
       {src: "../../img/juego/juegoNBA/carta35.png", puntuacion: 5 },
   {src: "../../img/juego/juegoNBA/carta36.png", puntuacion: 5 },
   {src: "../../img/juego/juegoNBA/carta37.png", puntuacion: 5 },
    ];
  
    const numImagenesMostrar = 5;
  const contenedor = document.getElementById("contenedor-imagenes");
  contenedor.innerHTML = "";

  // Mostrar 5 cartas "c37" en la parte superior
  for (let i = 0; i < 5; i++) {
    const imagen = document.createElement("img");
    imagen.src = "../../img/juego/juegoNBA/carta37.png";
    imagen.alt = "Carta";
    document.getElementById("contenedor-superior").appendChild(imagen);
  }

  // Mezclar las cartas
  shuffle(cartas);

  // Mostrar las primeras 5 cartas
  for (let i = 0; i < numImagenesMostrar; i++) {
    const carta = crearCarta(cartas[i]);
    carta.addEventListener("click", () => {
      carta.style.display = "none";
      mostrarCartaSeleccionada(carta.querySelector("img").src, cartas[i].puntuacion);
    });
    contenedor.appendChild(carta);
  }
  
    // Mostrar 5 cartas "c37" en la parte superior
    for (let i = 0; i < 5; i++) {
      const imagen = document.createElement("img");
      imagen.src = "carta37.png";
      imagen.alt = "Carta";
      document.getElementById("contenedor-superior").appendChild(imagen);
    }
  }
  
  function crearCarta(carta) {
    const div = document.createElement("div");
    const imagen = document.createElement("img");
    imagen.src = carta.src;
    const puntuacion = document.createElement("p");
    puntuacion.textContent = "Puntuación: " + carta.puntuacion;
  
    div.appendChild(imagen);
    div.appendChild(puntuacion);
    return div;
  }
  
  function mostrarCartaSeleccionada(src, puntuacion) {
    const cartaSeleccionada = document.getElementById("carta-seleccionada");
    cartaSeleccionada.innerHTML = "";
  
    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.classList.add("carta-seleccionada");
  
    const parrafoPuntuacion = document.createElement("p");
    parrafoPuntuacion.textContent = "Puntuación: " + puntuacion;
  
    cartaSeleccionada.appendChild(imagen);
    cartaSeleccionada.appendChild(parrafoPuntuacion);
  
    mostrarOtraCartaAleatoria(cartas);
  }
  
  function mostrarOtraCartaAleatoria(cartas) {
    const imagenesVisibles = document.querySelectorAll(
      "#contenedor-imagenes div:not([style='display: none;']) img"
    );
  
    if (imagenesVisibles.length === 0) {
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * imagenesVisibles.length);
    const imagen = imagenesVisibles[indiceAleatorio].cloneNode(true);
    const puntuacion = obtenerPuntuacionCarta(cartas, imagen.src);
  
    const parrafoPuntuacion = document.createElement("p");
    parrafoPuntuacion.textContent = "Puntuación: " + puntuacion;
  
    document.getElementById("carta-seleccionada").appendChild(imagen);
    document.getElementById("carta-seleccionada").appendChild(parrafoPuntuacion);
  }
  
  function obtenerPuntuacionCarta(cartas, src) {
    return cartas.find((carta) => carta.src === src).puntuacion;
  }
  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }
  
  mostrarImagenesAleatorias();