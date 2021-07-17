function getInfo(element) {

    var parent = element.parentElement;
    var pokeImg = parent.querySelector('img').getAttribute('src');
    var pokeName = parent.querySelector('h2').innerText;
    //var selPrice = parent.querySelector('p').innerText;
    
    var pokemonStatePlayer = {
        pokemonPic : pokeImg,
        pokemonName : pokeName,
        pokemonHP : 50
    }
    
    var pokemonCompState = {
        pokemonName : 'Pikachu',
        pokemonHP : 50
    }
    Cookies.set('pokeState', pokemonStatePlayer);
    Cookies.set ('pokeComp', pokemonCompState);
}