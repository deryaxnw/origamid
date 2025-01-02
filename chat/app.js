
// const notas = 
// [
 
//    { nota: 8, peso: 3 },
//    { nota: 7, peso: 2 },
//    { nota: 9, peso: 4 },
//    { nota: 6, peso: 1 }

//  ];




// function calcularAi(notas){
//     const numerador = notas.reduce((soma, item) => soma + item.nota * item.peso, 0)

//     const denominador = notas.reduce((soma , item) => soma + item.peso , 0)

//     const mediaPonderada = numerador / denominador

//     return mediaPonderada
// }

// console.log(`a soma das medias é igual a ${calcularAi(notas)}`)


// const notas = [
//     { nota: 5, peso: 2 },
//     { nota: 7, peso: 3 },
//     { nota: 10, peso: 5 },
//     { nota: 4, peso: 1 }
//   ];


// function calcularAi(notas){
    
//     const numerador = notas.reduce((soma, item) => soma + item.nota * item.peso, 0)

//     const denominador = notas.reduce ((soma, item) => soma + item.peso , 0)

//     const media = numerador / denominador

//     const filter = notas.filter((notas) => notas.nota > media)

//     return filter
// }


// console.log(calcularAi(notas))

// const vendas = [
//     { preco: 50, quantidade: 10 },
//     { preco: 30, quantidade: 5 },
//     { preco: 70, quantidade: 2 },
//     { preco: 40, quantidade: 8 }
//   ];
  

// function calcularAi(vendas) {

//     const map = vendas.map((item) => ({preco: item.preco, quantidade: item.quantidade * 1.10}))
    
//     const numerador = map.reduce((soma, item) => soma + item.preco * item.quantidade, 0)

//     const denominador = map.reduce((soma, item) => soma + item.quantidade, 0)

//     const res = numerador / denominador

//     return res

// } 

// console.log(calcularAi(vendas))