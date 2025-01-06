// const pessoa = {
//     nome: "ryan",
//     idade: 20,
//     profissao: "paia",
//     faculdade: true,

// }

// const quadrado = {
//     lado: 4,

//     area: function(lado) {
//         return lado * lado
//     },

//     perimetro(lado){

//         return this.lado * lado
//     }
// }

// console.log(quadrado.area(4))

// let menu = {
//     width: 800,
//     color: "blue",
//     backgroundColor: '#84E',

//     esconder(){

//         return this.width
//     }
// }

// console.log(menu.esconder())

// let cor = menu.backgroundColor

// console.log(cor)

// const data = {
//     nome: "jao",
//     sobrenome: "ryan",
//     cidade: "fortal",
//     idade: 20,

// nome(){
//     return `${this.nome} ${this.sobrenome}`
// }
// so retorna a função
// }

// data.MeuNome = function() {
//  return `Meu nome é ${this.nome} ${this.sobrenome}`
// }

// console.log(data.MeuNome())

// const carro = {
//     valor: 3000,
//     nome: "uno",
//     marca: "fiat"
// }

// carro.valor = 20000

// console.log(carro)

//alterando valor

// const dog = {
//     cor: "preto",
//     raca: "ko",
//     idade: 10,

//     latir(pessoa) {
//         if(pessoa === "homem"){
//             return "latir"
//         } else {
//             return "grunido"
//         }

//     }
// }

// console.log(JSON.stringify(dog))

// function Carro(){
//     this.marca = "fiat";
//     this.modelo = "rapido";
//     this.ano = 2000;
// }

// const honda = new Carro()

// const uno = new Carro()
// uno.marca = "chevrole"

// console.log(uno)

// function Veiculo(marcaAtribuida, precoAtribuido, ano){
//     this.taxa = 0.6
//     const precoFinal = precoAtribuido * this.taxa
//     this.marca = marcaAtribuida
//     this.preco = precoFinal
//     this.ano = ano
// }

// const carro = new Veiculo("honda", 20000, 20);

// const bike = new Veiculo('bmx', 30000, 20);

// const moto = new Veiculo("yamaha", 40000, 20);

// console.log(JSON.stringify(bike))
// console.log(JSON.stringify(carro))
// console.log(JSON.stringify(moto))

// const Dom = {
//     seletor: 'li',

//     element(){
//       return document.querySelector(this.seletor);
//     },

//     ativar() {
//         const elementoSelecionado = this.element()
//         console.log(elementoSelecionado.classList.add('ativar'))
//     }
// }

//construtor

// function Dom(seletor) {

//   this.element = () => {
//     return document.querySelector(seletor);
//   };

//   this.ativar = () => {

//     this.element().classList.add("ativar");

//   };
// }
// const li = new Dom('li')
// const ul = new Dom('ul')

// function Pessoa(nome, idade) {

//     this.nome = nome
//     this.idade = idade


// this.comer = function (){

//     console.log(nome + ' comeu')
// }
//    this.andar = function() {
        
//         console.log(nome + ' andou')
//     }   
// }


// Pessoa.prototype.comer = function() {

//     return this.nome + ' comeu'
// }




// const pessoa = new Pessoa("joao", 16)
// const pessoa2 = new Pessoa("lili", 19)
// const pessoa3 = new Pessoa("gab", 14)



// console.log()


// function Dom(seletor){
    
//   const elementos = document.querySelectorAll(seletor)
//   this.elementos = elementos;

//   this.addClass = function(classe) {
//     elementos.forEach((e) => {
//         e.classList.add(classe)
//     })
//   }

//   this.removeClass = function(classe) {
//     elementos.forEach((e) => {
//         e.classList.remove(classe)
//     })
//   }
// }

// const listaElementos = new Dom('li');

// listaElementos.removeClass('ativar')


// const carro = {
//     marca: 'ford',
//     preco: 2000,

//     andar(){
//         return ' andou'
//     }
// }


function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}


Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const ryan = new Pessoa('ryan', 'olveira', 19)





// const lista = document.querySelector('li')
