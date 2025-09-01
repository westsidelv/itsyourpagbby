const frases = [
    "Te amo más de lo que imaginé",
    "Eres mi razón de sonreír cada día",
    "Contigo todo es mejor",
    "Gracias por existir",
    "Eres mi sueño hecho realidad",
    "Siempre juntos, siempre felices",
    "Espero que este día sea tan especial como tú 💘",
    "Que Dios te de muchos años más de vida 🥹",
    "Cada momento contigo es especial",
    "FELICIDADES MI AMOR 💖"
];
const song = document.getElementById('song');
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
    song.play();
    playButton.disabled = true; // Opcional: deshabilita el botón después de reproducir
});

function crearFrase() {
    const frase = document.createElement('div');
    frase.className = 'frase';
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];
    frase.style.left = `${Math.random() * 80 + 10}vw`;
    frase.style.top = '-90px';
    frase.style.fontSize = `${Math.random() * 0.5 + 1}em`;
    document.body.appendChild(frase);

    frase.addEventListener('animationend', () => {
        frase.remove();
    });
}

// Genera frases infinitamente cada 700ms
setInterval(crearFrase, 700);

const fotos = [
    "img1.jpeg",
    "img2.jpeg"
];

function ponerfotos() {
    const foto = document.createElement('img');
    foto.className = 'foto';
    foto.src = fotos[Math.floor(Math.random() * fotos.length)];
    
    // Posición aleatoria horizontal
    foto.style.position = 'absolute';
    foto.style.left = `${Math.random() * 80 + 10}vw`;
    foto.style.top = '-90px';
    
    document.body.appendChild(foto);

    // Elimina la foto cuando termine la animación
    foto.addEventListener('animationend', () => {
        foto.remove();
    });
}

// Genera imágenes infinitamente cada 700ms
setInterval(ponerfotos, 1000);
