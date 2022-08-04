//XMLHttpRequest
//Era usado en los inicios de JavaScript
const XMLHttpRequest = require('xmlhttprequest');
const API  = 'https://api.escuelajs.co/api/v1';

//Volviendo a las definiciones anteriores, creamos una función para traer data desde la fakeApi
//Con xmlhttprequest se va a poder controlar todo el flujo del llamado
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    //Primer argumento es el tipo, luego la URL, luego true para habiloitarlo
    xhttp.open('GET', urlApi, true);
    //Validando cuando hay un cambio de estado:
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){ // el 4 es igual a solicitud completada
            if(xhttp.status === 200){ //200 es igual a solicitud correcta (OK)
                //Transformamos en JSON lo recibido dentro de xhttp.respponseText
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            //Pasando el error
            const error = new Error('Error' + urlApi);
            //Retornando error y mandando nulo en nuestra callback porque no regresó ningún dato
            return callback(error, null);
        }
    }
    xhttp.send(); //Enviando lo mandado a llamar
}

