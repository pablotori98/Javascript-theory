//Vamos a aprender a empujar o añadir elementos a nuestro array

let arr = [4,5,734,43,45];

//Para añadir elementos a nuestro array usamos el comando .push
//Vamos pues a añadir 2 números aleatorios de 1 a 1000
arr.push(Math.floor(Math.random()*1000))
arr.push(Math.floor(Math.random()*1000))

//Con el console.log comprobaremos si lo hicimos correctamente
console.log(arr)