//mude a cor da tela para azul e depois vermelho a cada 2s

// function mudarClasse() {
//     document.body.classList.toggle('active')
// }

// setInterval(mudarClasse, 2000);

//crie um cronometro utilizando o setInterval. deve ser possivel
//iniciar , pausar e resetar (duplo clique no pausar)
// const btn = document.querySelector('button')
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", IniciarTempo);
pausar.addEventListener("click", PausarTempo);
pausar.addEventListener("dblclick", ResetarTempo);

let i = 0
let timer;

 
function IniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 100);
    iniciar.setAttribute('disabled', '')
}

function PausarTempo() {
 clearInterval(timer)
 iniciar.removeAttribute('disabled', '')
}

function ResetarTempo() {
    tempo.innerText = 0
    i = 0
}

