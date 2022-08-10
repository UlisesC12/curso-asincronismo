//ASYNC & AWAIT
//Async es una declaracion que define una función asíncrona, la cual devuelve un objeto
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ("Async!!"), 5000)
            : reject(new Error("Error!!"));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello!");
}

//No se espera a que se termine de ejecutar, ejecuta lo demás y luego da la salida correspondiente a la función asíncrona
console.log("Before...");
anotherFn(); 
console.log("Finished Execution!");