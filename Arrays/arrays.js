//declaring the array
//Aqui tenemos un array, que se trata de una lista con cualquier tipo de valor.
//En este caso nuestro array esta formado por 7 strings
//Es importante recordar que los arrays comienzan en posición 0
//                0        1         2           3
let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

//1. print the item here
//Para imprimir cualquier elemento de nuestro array
//haremos un console.log del array con la posición

console.log(myArray[2])
//2. change 'thursday'a value here to null
//Para cambiar el valor del array declaramos la posición y la igualamos al valor deseado
myArray[4]=null;
//3. print the position of step 2
console.log(myArray[4])

//4. Imprimir ultimo valor del array
//Opción 1 imprimiendolo directamente
console.log(myArray[myArray.length-1])
//Opción 2 creando una variable e imprimiendola
let theLastOne = myArray[myArray.length-1];
console.log(theLastOne)
//Siempre debemos restar 1 a la ultima posición ya que si el array
//tiene 7 elementos la ultima posición será la 6