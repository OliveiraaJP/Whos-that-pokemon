const POKE__API = "https://pokeapi.co/api/v2/pokemon"

let pokeId = null;
let poke = null;

function pokeIdRandomizer() {
    pokeId = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
    console.log(pokeId);
    resetInput()
    getPokemon()
}

function resetInput() {
    let input = document.querySelector('#card__name')
    input.classList.remove('redBackground')
    input.classList.remove('greenBackground')
}

function getPokemon() {
    const promise = axios.get(`${POKE__API}/${pokeId}`)
    promise.then(response => {
        poke = response.data;
        pokeName = poke.name;
        pokeImage = poke.sprites.other;
        teste(pokeImage)
    })
}

function teste(responseImage) {
    const key = 'official-artwork';
    let novaImage = responseImage[key].front_default
    console.log(novaImage);

    document.querySelector(".card__photo").innerHTML = `
    <img src="${novaImage}" class="grayScale" alt="pokemon photo">
    `
}

function checkCorrectName(response) {
    if (checkEnter(response)) {
        console.log(pokeName);
        let inputNameAnswer = document.querySelector('#card__name').value;
        inputNameAnswer = inputNameAnswer.toLowerCase()
        if (validPokeName(inputNameAnswer)) {

        }
    }
}


document.querySelector('#card__name').addEventListener("keyup", checkCorrectName)

function checkEnter(response) {
    if (response.key === "Enter") {
        return true
    } else { return false }
}

function validPokeName(answer) {
    if (answer === pokeName) {
        let pokeImage = document.querySelector('.card__photo img')
        console.log("acertou");
        pokeImage.classList.remove("grayScale")

        let input = document.querySelector('#card__name')
        input.classList.remove('redBackground')
        input.classList.add('greenBackground')
    } else {
        let input = document.querySelector('#card__name')
        input.classList.add('redBackground')
    }


}