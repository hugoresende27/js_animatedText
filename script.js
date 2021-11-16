const textEl = document.getElementById('texto')
const speedEl = document.getElementById('velocidade')
const text = "Bem vindo ao curso de 50 projectos em Javascript, realizado por Hugo Resende..."

let index = 1
let speed = 300 / speedEl.value

escreveTexto()

function escreveTexto() {
    textEl.innerText = text.slice(0, index)

    index++
    if ( index > text.length) {/*PARA COMEÇAR A ESCREVER DE NOVO QUANDO CHEGAR AO FIM DO TEXTO */
        index = 1
    }

    setTimeout(escreveTexto , speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
/////////////////////////////////////////////////////////////////////////////////////////
const inputTexto = document.getElementById('txtInput')
inputTexto.addEventListener ('input', (e) => {

const textEl2 = document.getElementById('texto2')

let indexB = 1

const x = function escreveTexto2() {
    textEl2.innerHTML = e.target.value.slice(0, indexB)
    indexB++
    // if ( indexB > inputTexto.length) {/*PARA COMEÇAR A ESCREVER DE NOVO QUANDO CHEGAR AO FIM DO TEXTO */
    //     indexB = 1
    // }
    console.log(textEl2)
    setTimeout(escreveTexto2 , speed)
}
})
