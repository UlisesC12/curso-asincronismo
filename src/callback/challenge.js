//XMLHttpRequest
//Era usado en los inicios de JavaScript
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//Volviendo a las definiciones anteriores, creamos una función para traer data desde la fakeApi
//Con xmlhttprequest se va a poder controlar todo el flujo del llamado
function fetchData(urlApi, callback) {
    //Iniciar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
    //El Primer argumento es el tipo de método, luego la URL, luego true para habilitarlo
    xhttp.open('GET', urlApi, true);
    //Validando cuando hay un cambio de estado:
    xhttp.onreadystatechange = function (event) {
        // el 4 es igual a solicitud completada
        if (xhttp.readyState === 4) {
            //200 es igual a solicitud correcta (OK)
            if (xhttp.status === 200) {
                //Transformamos en JSON lo recibido dentro de xhttp.respponseText
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                //Pasando el error
                const error = new Error('Error ' + urlApi);
                //Retornando error y mandando nulo en nuestra callback porque no regresó ningún dato
                return callback(error, null);
            }
        }
    }
    xhttp.send(); //Enviando lo mandado a llamar
}
// Cómo mandar a llamar la API
// 1) Pasar con comillas francesas (template strings)
// 2) Completar la url, en este caso para products
// 3) Como segundo argumento pasar una función, en este caso una función anónima, la cual tiene como argumentos -> error & data
// 4) Pasarle error1 y data1

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        //si en este punto se identifica un error se imprime en consola y se detiene el proceso
        if(error2) return console.log(error2);
         //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) return console.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
  });
});


