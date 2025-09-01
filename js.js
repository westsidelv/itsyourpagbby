document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const valor = document.getElementById('fecha').value;
    const mensaje = document.getElementById('mensaje');
    if (valor === "180625") {
        window.location.href = "html2.html";
    } else {
        mensaje.textContent = "Intenta recordar bien amor 🥹.";
    }
});
audio = document.getElementById('miAudio');
document.getElementById('kitty').addEventListener('click', function() {
    if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
const fotos = [
    "Hello Kitty 4.png",
    "Hello Kitty 3.png",
    "Hello Kitty 2.png",
    "Hello Kitty.png"
];


function ponerfotos() {
    const foto = document.createElement('img');
    foto.className = 'foto';
    foto.src = fotos[Math.floor(Math.random() * fotos.length)];
    
    // Posición aleatoria horizontal
    foto.style.position = 'absolute';
    foto.style.left = `${Math.random() * 80 + 10}vw`;
    foto.style.top = '-60px';
    
    document.body.appendChild(foto);

    // Elimina la foto cuando termine la animación
    foto.addEventListener('animationend', () => {
        foto.remove();
    });
}

// Genera imágenes infinitamente cada 700ms
setInterval(ponerfotos, 700);
