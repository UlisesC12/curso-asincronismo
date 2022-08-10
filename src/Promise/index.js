// Promesas
// Una promesa es algo que va a pasar (o nunca)
// Tiene 3 estados:  pendiente (Se está ejecutando), cumplido (Regresa la información deseada), Rechazado

// Para construir una promesa se debe de hacer con la palabra reservada: PROMISE
// Además se le añaden 2 funciones dentro de RESOLVE y REJECT

//->Estructura base:
const promise = new Promise(function (resolve, reject) {
    resolve("Hey");
});

//->Con catch y then:
//Promesa apra verificar si podemos cumplir con la demanda de leche al ordeñar vacas o si no se puede.
const cows = 9;
const countCows = new Promise( function(resolve, reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is not enough cows");
    }
});

//Para ejecutar:
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Ended Execution!"));