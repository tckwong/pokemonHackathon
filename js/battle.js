var userMaxHealth;
var userCurrentHealth;
var computerCurrentHealth;

var getCookie = Cookies.get('pokeState');
console.log(getCookie);

var cookieParse = JSON.parse(getCookie);

// function getInfo(element) {

//     var parent = element.parentElement;
//     var pokeImg = parent.querySelector('img').getAttribute('src');
//     var pokeName = parent.querySelector('h2').innerText;
//     //var selPrice = parent.querySelector('p').innerText;
    
//     var pokemonState = {
//         pokemonPic : pokeImg,
//         pokemonName : "Pikachu",
//         pokemonMaxHP : 75
//     }

//     Cookies.set('pokeState', pokemonState);
// }

appendtoBattle();

function appendtoBattle() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedName = document.createElement('h2');
    //var selectedRent = document.createElement('p');
    var parent = document.getElementById('parent');

    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pokemonPic);
    parent.append(selectedImg);

    selectedName.innerText = cookieParse.pokemonName;
    parent.append(selectedName);
}

//Remove cookies and takes user back to home page
// var myBtn = document.getElementById('btnGoBack');
// myBtn.addEventListener('click', newOption);

// function newOption() {
//    Cookies.remove('carInfo');
// }