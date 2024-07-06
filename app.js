let elegirArma = document.querySelector('#elegir-tu-arma');
let instruccion = document.querySelector('.instruccion');
let puntajeJugador = document.querySelector('#puntaje-jugador');
let puntajeComputadora = document.querySelector('#puntaje-pc');
let eleccionJugador = document.querySelector('#eleccion-jugador');
let eleccionComputadora = document.querySelector('#eleccion-pc');
let ganadorTurno = document.querySelector('#ganador-turno');
let mensajeBatalla = document.querySelector('.mensaje-batalla');
let ganaPunto = document.querySelector('#ganador-turno');
let botonesArmas = document.querySelectorAll('.arma');
let reiniciarPartida = document.querySelector('#reiniciar');

let puntosUsuario = 0;
let puntosComputadora = 0;

botonesArmas.forEach((arma) => {
    arma.addEventListener('click', iniciarPartida);
});


function iniciarPartida(jugada){
    //mostrarResultado();
    let jugadaUsuario = jugada.currentTarget.id;
    eleccionJugador.innerHTML = jugadaUsuario;

    let jugadaComputadora = Math.floor(Math.random() *3);
    
    if(jugadaComputadora === 0){
        jugadaComputadora = 'piedra✊';
    }else if(jugadaComputadora === 1){
        jugadaComputadora = 'papel✋';
    }else if(jugadaComputadora === 2){
        jugadaComputadora = 'tijera✌️';
    }
    eleccionComputadora.innerHTML = jugadaComputadora;
    
    if(
        (jugadaUsuario === 'piedra✊' && jugadaComputadora === 'tijera✌️') ||
        (jugadaUsuario === 'papel✋' && jugadaComputadora === 'piedra✊') ||
        (jugadaUsuario === 'tijera✌️' && jugadaComputadora === 'papel✋') 
    ){
        ganaUsuario();
    }else if(
        (jugadaComputadora === 'piedra✊' && jugadaUsuario === 'tijera✌️') ||
        (jugadaComputadora === 'papel✋' && jugadaUsuario === 'piedra✊') ||
        (jugadaComputadora === 'tijera✌️' && jugadaUsuario === 'papel✋')
    ){
        ganaComputadora();
    }else if(jugadaUsuario === jugadaComputadora){
        ganaPunto.innerHTML = 'Empate😮';
    }

    mensajeBatalla.classList.remove('disabled');

    if(puntosUsuario === 5 || puntosComputadora === 5){

        if(puntosUsuario === 5){
            instruccion.innerText = '🤩🔥Le has ganado a la computadora🤩🔥';
        }
        
        if(puntosComputadora === 5){
            instruccion.innerText = '😭Has perdido, la computadora te ha ganado😭';
        }

        elegirArma.classList.add("disabled");
        reiniciarPartida.classList.remove('disabled');
        reiniciarPartida.addEventListener('click', btnReiniciar);
    }
}

function ganaUsuario(){
    puntosUsuario++;
    puntajeJugador.innerHTML = puntosUsuario;
    ganaPunto.innerHTML = 'Ganaste un punto🔥';
}

function ganaComputadora(){
    puntosComputadora++;
    puntajeComputadora.innerHTML = puntosComputadora;
    ganaPunto.innerHTML = 'La computadora gano un punto😭';
}

/*function noMostrarArmas(){
    elegirArma.forEach((e) =>{
        e.classList.add('disabled');
    });
}*/

function btnReiniciar(){
    reiniciarPartida.classList.add('disabled');
    elegirArma.classList.remove("disabled");
    mensajeBatalla.classList.add('disabled');

    puntosUsuario = 0;
    puntosComputadora = 0;

    puntajeJugador.innerHTML = puntosUsuario;
    puntajeComputadora.innerHTML = puntosComputadora;
    
    instruccion.innerHTML = 'El primero en llegar a 5 puntos gana';
}





