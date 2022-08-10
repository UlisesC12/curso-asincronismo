// FETCH
// In terminal and in this path write npm i node-fetch
// Usar las dependencias instaladas:
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//crear una función para hacer un llamado
function fetchData(urlApi) {
    //utilizando la instrucción fetch que viene del paquete node-fetch:
    return fetch(urlApi);
};

//Mandando a llamar la función:
//Se pueden anidar múltiples instrucciones Then
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
    })
    .then(() => {
        console.log("hola");
    })
    .catch(error => console.log(error));

//Haciendo un llamado múltiple:
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        // console.log(products);
        //Accediendo a la información del primer producto con su id
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json()) //Respuesta del return anterior
    .then(product => {
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log("Executed!"))