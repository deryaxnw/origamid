
//retornar todas as images


// console.log(img)


// const h2g = document.querySelector('.cafe-descricao h2')

// console.log(h2g)

const pp = document.querySelectorAll('p')

// console.log(pp[pp.length - 1])

// let  num = 0
// const img = document.querySelectorAll("img");

// img.forEach( (item, index, array) => {
//     console.log(num++)
    
// });

// for(num; num <= 10; num++ ){
//     console.log(num)
// }

// pp.forEach((item, index, array,) => {
//     console.log(item)
// })


// const p = document.querySelectorAll('p')

// const total = Array.prototype.reduce.call(p, (acc, item) => {
//     return acc + item.innerText.length
// }, 0)

// console.log(total)


function criaElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null


    return elemento

}

console.log(criaElemento('ul', 'lista', 'escri algo aqui'))



const h1Titulo = criaElemento.bind(null, 'h1', 'titulo')

const cursoJs = h1Titulo('curso de javascript')
const lala = h1Titulo('curso html')

console.log(cursoJs, lala);


