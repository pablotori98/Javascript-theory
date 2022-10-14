//Hay diversas formas de crear un bucle

//1. For loop
for(let i=0; i<20; i++){
    console.log(i)
}

// 1.2 For loop de un array
let myArray = [232,32,1,4,55,4,3,32,3,24,5,5,5,34,2,3,5,5365743,52,34,3,55,33,435,4,6,54,63,45,4,67,56,47,1,34,54,32,54,1,78,98,0,9,8,98,76,7,54,2,3,42,456,4,3321,5];

for(let i=0; i<myArray.length; i++){
    //console.log(i) //De esta forma solo mostramos su index, por lo tanto su posición
    console.log(myArray[i]) //De esta forma recorremos todo el array imprimiendo todos sus elementos
}

// 1.3 For loop haciendo saltos de 2 en dos

for(i=0; i<myArray.length; i = i +2){
    console.log(myArray[i])
}

//1.4 For loop desde el final del array

for(i=myArray.length-1; i>0; i--){
    console.log(myArray[i])
}

//1.5 For loop comenzando en 1

for(let i = 1; i <= 12 ; i++){
    console.log(i)
}