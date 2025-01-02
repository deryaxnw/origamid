// const link = window.location.href

// console.log(`esse é o link e a rota ${link}`)

// const element = document.querySelector(".opa")

// function ele(){
//     console.log(`localizei o elemento ${element}`)
// }

// addEventListener("click", ele)


const aumentar = document.querySelector('#aumentar')
const diminuir = document.querySelector('#diminuir')
const contador = document.querySelector('#contador')

const text = document.querySelector('#texto')

const theme = document.querySelector('#theme')

const body = document.querySelector('body')

aumentar.addEventListener('click', () => {
    const mais = +(contador.textContent)

    contador.textContent = mais + 1

    if (mais >= 5){
        contador.classList.add('ct')
    } else{
        contador.classList.remove('ct')
    }
    

});

diminuir.addEventListener('click', () => {
    const mais = +(contador.textContent)

    contador.textContent = mais - 1
})


text.addEventListener('input', () => {
    console.log(text.value);
    
})








let DarkTheme;


window.onload = () => {
    const isdark = localStorage.getItem('dark')

    DarkTheme = isdark === "true" ? true : false;

    if(DarkTheme){
        body.classList.add('corpo')
    } else {
        body.classList.remove('corpo')
    }

}



theme.addEventListener('click' ,() => {

    DarkTheme = !DarkTheme


    localStorage.setItem('dark', DarkTheme)

    if(DarkTheme){
        body.classList.add('corpo')
    } else {
        body.classList.remove('corpo')
    }

})