// const games = ["ps4", "ps5", "x-box"]

// console.log(games.pop())
// //remove o ultimo item e retorna ele

// console.log(games.push("switch", 19, "oloco"))
// //adiciona um item

// console.log(games)


// for(let num = 1; num < 10; num++){
//    console.log(num)

// }

// let num = 1

// while (num < 10){
//    console.log()
//    num++
// }
// const games = ["ps4", "ps5", "x-box"]
// for(let i = 0; i < games.length; i++){

//    console.log(games[i])
// }

// games.forEach((item, i, p) => {

//    games.push("switch", "oloco")
//    games.pop()
//    console.log(item, i, p)
// })



// const ganhos = [1959, 1962, 1970, 1994, 2002]

// for(let i = 0; i < ganhos.length ; i++){
//    console.log(`o brasil ganhou a copa de ${ganhos[i]}`)
// }


const frutas = ["banana", "maçã", "pera", "uva"]

for(let i = 0; i < frutas.length; i++){
   if(frutas[i] == "pera"){
      break 
   }
   console.log(frutas[i])
}

const ultimafruta = frutas[frutas.length - 1]

console.log(ultimafruta)
