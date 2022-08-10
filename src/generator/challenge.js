import fetch from"node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function anotherFunction(urlAPI){
    const response = await fetch(urlAPI)
    const data =  await response.json()
    return data;
}

async function* iterateData(){
    try {
        const products = await anotherFunction(`${API}/products`);
        for (let product of products) {
            yield console.log(product);
        }
    } catch (err) {
        console.error(err);
    }
}

const it = iterateData()

it.next().value;
it.next().value;
it.next().value;
it.next().value;
it.next().value;
it.next().value;
it.next().value;