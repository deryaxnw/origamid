

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


function Veiculo(marcaAtribuida, precoAtribuido, ano){
    const taxa = 0.6
    const precoFinal = precoAtribuido * taxa
    this.marca = marcaAtribuida
    this.preco = precoFinal
    this.ano = ano
}


const carro = new Veiculo("honda", 20000, 20);

const bike = new Veiculo('bmx', 30000);

const moto = new Veiculo("yamaha", 40000);

console.log(JSON.stringify(bike))
console.log(JSON.stringify(carro))
console.log(JSON.stringify(moto))


