const resetBtn = document.querySelector('#reset');
const playBtn = document.querySelector('#play');
const timerEL = document.querySelector('#timer');
const root = document.querySelector(':root');

//configuracion inicial
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEL.innerText = formatTime(totalSeconds);

const timerInterval = setInterval(run, 1000);

playBtn.addEventListener("click", () => {
    playing = !playing;
    playBtn.classList.toggle("play");
    playBtn.classList.toggle("bg-green-500");//alternar la clase de color
    const playIcon = playBtn.querySelector("i");
    playIcon.classList.toggle("fa-play");//alternar el iconoi de produccion
    playIcon.classList.toggle("fa-pause")//alternar el icono de pause

});
resetBtn.addEventListener("click", resetALL)

//ejecutando el temporizador
function run() {
    if (playing) {
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            clearInterval(timerInterval);
            resetAll();
        }

        timerEL.innerText = formatTime(currentSeconds);
        root.style.setProperty('--degrees', calcDeg());
    }
}

//reiniciar el temporisador
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const newSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')};${newSeconds.toString().padStart(2, '0')}`;
}

// calcular los grados
function resetALL() {
    playing = false;
    playBtn.classList.remove('play');
    playBtn.classList.remove('bg-green-500');//remueve el color de la clase
    const playIcon = playBtn.querySelector('i');
    playIcon.classList.remove('fa-pause');//pause del icono
    playIcon.classList.add('fa-play');//funcion d play icono
    currentSeconds = totalSeconds;
    timerEL.innerText = formatTime(currentSeconds);
    root.style.setProperty('--degrees', '0deg');
}

