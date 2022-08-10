//GENERADORES
//Es una estructura que nos va a permitir usar un iterador, con el cual podemos pausar y retomar segun sea el caso y la necesidad que estemos haciendo nuestra lógica

//Creando una funcion para controlar un iterador, la cual se identifica con un asterisco
function* gen() {
    //Dentro de esta, tenemos la palabra reservada: yield
    yield 1;
    yield 2;
    yield 3;
}

//Utilizar los numeros dentro de nuestra función.
//Con esto tenemos el acceso a una palabra reservada más: NEXT
const g = gen();
console.log(g.next().value); //Accediendo al 1
console.log(g.next().value); //Accediendo al 2
console.log(g.next().value); //Accediendo al 3

//Utilizando iteradores
function* iterate(array) {
    for (let value of array){
        yield value;
    }
}
const it = iterate(['Oscar','Omar','Ana','Lucía','Juan']);
console.log(it.next().value); //Oscar
console.log(it.next().value); //Omar
console.log(it.next().value); //Ana
console.log(it.next().value); //Lucia
console.log(it.next().value); //Juan
console.log(it.next().value); //undefined