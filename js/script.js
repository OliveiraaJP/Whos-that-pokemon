const POKE__API = "https://pokeapi.co/api/v2/pokemon"

let pokeId = null;
let poke = null;

function pokeIdRandomizer() {
    pokeId = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    console.log(pokeId);
    getPokemon()
}

function getPokemon(){
    const promise = axios.get(`${POKE__API}/${pokeId}`)
    promise.then(response => {
        poke = response.data;
        pokeName = poke.name;
        pokeImage = poke.sprites.other;
        teste(pokeImage)
    })
}   

function teste(responseImage){
    const key = 'official-artwork';
    let novaImage = responseImage[key].front_default
    console.log(novaImage);
    
    document.querySelector(".card__photo").innerHTML = `
    <img src="${novaImage}" alt="pokemon photo">
    `
}
