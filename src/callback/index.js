//Función que recibe dos valores
function sum(num1, num2){
    return num1 + num2;
}

//función que en sus argumentos recibe a otra fución (callback)
function calc(num1, num2, callback){
    return callback(num1, num2); //la función "callback" puede ser nombrada de cualquier forma, por ejemplo "sumNums"
}


//Mandando a llamar
console.log(calc(2,2, sum));

//¿Cómo funciona el setTimeOut?
//Usamos una función anónima (porque no tiene nombre)
setTimeout(function() {
    console.log("hola JavaScript");
}, 2000) // Valor en ms, entonces son 2 segundos


//Ejecutando una función son setTimeout
function greeting(name){
    console.log(`Hola ${name}`);
}

//Al final de los argumentos de setTimeout se reciben los argumentos de la función que se le está pasando
setTimeout(greeting, 2000, 'Ulises');
