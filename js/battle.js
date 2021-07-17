// var userMaxHealth = 50;
// //updated constantly
// var userCurrentHealth;
// var computerCurrentHealth;

var compHPBAR = document.getElementById("compHPBAR")
var myHPBAR = document.getElementById("myHPBAR")

var getCookie = Cookies.get('pokeState');
console.log(getCookie);
var getCookieComp = Cookies.get('pokeComp');
console.log(getCookieComp);

var cookieParse = JSON.parse(getCookie);
var cookieParseComp = JSON.parse(getCookieComp);

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

//Load Buttons to Battle


appendtoBattle();
function appendtoBattle() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedName = document.createElement('h2');
    //var selectedCurrHP = document.createElement('p');
    var parent = document.getElementById('parent');

    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pokemonPic);
    parent.append(selectedImg);
    //parent.insertBefore(selectedImg, myHPBAR);

    selectedName.innerText = cookieParse.pokemonName;
    parent.pkmTitle.append(selectedName);

    // selectedCurrHP.innerText = "Current Health: "+cookieParse.userCurrentHealth;
    // parent.append(selectedCurrHP);
}

//Remove cookies and takes user back to home page
// var myBtn = document.getElementById('btnGoBack');
// myBtn.addEventListener('click', newOption);

// function newOption() {
//    Cookies.remove('carInfo');
// }

var pokemonCompState = {
    pokemonName : 'Pikachu',
    compPokemonHP : 50,
    attack : [
        {
        attackName: "Lightning Bolt",
        attackValue: 12,
            availableable: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        },
        {
        attackName: "Quick Attack",
        attackValue: 10,
            availableable: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        },
        {
        attackName: "Double Kick",
        attackValue: 7,
            availableable: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        },
        {
        attackName: "Thunder Punch",
        attackValue: 17,
            availableable: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        }
    ]
}
// PLAYER ATTACK ONE
var attackClick = document.getElementById('Attack1');
attackClick.addEventListener('click', playerTurn);

function playerTurn() {
    
    var damageDealt = Math.floor(Math.random() * 11);
    console.log("Damage dealt: "+ damageDealt);
    
    cookieParseComp.computerCurrentHealth = cookieParseComp.computerCurrentHealth - damageDealt;
    console.log("Computer Current Health: "+cookieParseComp.computerCurrentHealth);

    //Update comp currentHealth on DOM
    document.getElementById('compHP').innerText = "Comp Current Health: " + cookieParseComp.computerCurrentHealth;

    if (cookieParseComp.computerCurrentHealth <= 0) {
        alert("Game ended, you WON!");
    } else {
        computerTurn();
    }
}
// PLAYER ATTACK TWO
var attackClick = document.getElementById('Attack2');
attackClick.addEventListener('click', playerTurn);

function playerTurn() {
    
    var damageDealt = Math.floor(Math.random() * 11);
    console.log("Damage dealt: "+ damageDealt);
    
    cookieParseComp.computerCurrentHealth = cookieParseComp.computerCurrentHealth - damageDealt;
    console.log("Computer Current Health: "+cookieParseComp.computerCurrentHealth);

    //Update comp currentHealth on DOM
    document.getElementById('compHP').innerText = "Comp Current Health: " + cookieParseComp.computerCurrentHealth;

    if (cookieParseComp.computerCurrentHealth <= 0) {
        alert("Game ended, you WON!");
    } else {
        computerTurn();
    }
}
// PLAYER ATTACK THREE
var attackClick = document.getElementById('Attack3');
attackClick.addEventListener('click', playerTurn);

function playerTurn() {
    
    var damageDealt = Math.floor(Math.random() * 11);
    console.log("Damage dealt: "+ damageDealt);
    
    cookieParseComp.computerCurrentHealth = cookieParseComp.computerCurrentHealth - damageDealt;
    console.log("Computer Current Health: "+cookieParseComp.computerCurrentHealth);

    //Update comp currentHealth on DOM
    document.getElementById('compHP').innerText = "Comp Current Health: " + cookieParseComp.computerCurrentHealth;

    if (cookieParseComp.computerCurrentHealth <= 0) {
        alert("Game ended, you WON!");
    } else {
        computerTurn();
    }
}
// PLAYER ATTACK FOUR
var attackClick = document.getElementById('Attack4');
attackClick.addEventListener('click', playerTurn);

function playerTurn() {
    
    var damageDealt = Math.floor(Math.random() * 11);
    console.log("Damage dealt: "+ damageDealt);
    
    cookieParseComp.computerCurrentHealth = cookieParseComp.computerCurrentHealth - damageDealt;
    console.log("Computer Current Health: "+cookieParseComp.computerCurrentHealth);

    //Update comp currentHealth on DOM
    document.getElementById('compHP').innerText = "Comp Current Health: " + cookieParseComp.computerCurrentHealth;

    if (cookieParseComp.computerCurrentHealth <= 0) {
        alert("Game ended, you WON!");
    } else {
        computerTurn();
    }
}

function computerTurn() {
    //console.log("test");
    var compAttIndex = Math.floor(Math.random() * (pokemonCompState.attack.length));
    console.log("Computer Choose attack " + compAttIndex);
    console.log("Computer Choose move " + pokemonCompState.attack[compAttIndex].attackName);
    myHPBAR.value -= pokemonCompState.attack[compAttIndex].attackValue;
    cookieParse.userCurrentHealth = cookieParse.userCurrentHealth - pokemonCompState.attack[compAttIndex].attackValue;
    console.log(cookieParse.userCurrentHealth);
    compHPBAR.value -= pokemonCompState.attack[compAttIndex].attackValue;

    //Update player currentHealth on DOM
    document.getElementById('myHP').innerText = "My Current Health: " + cookieParse.userCurrentHealth;

    if (cookieParse.userCurrentHealth <= 0) {
        alert("Game ended, you LOSE!");
    }
}

button1 = document.getElementById('Attack1')
button2 = document.getElementById('Attack2')
button3 = document.getElementById('Attack3')
button4 = document.getElementById('Attack4')

if(cookieParse.pokemonName == "Bulbasaur") {
    var bulbMoves = [
        {
        name: "tackle",
        available: {
            total: 30,
            remaining: 30
        }
        },
        {
        name: "vine whip",
        available: {
            total: 10,
            remaining: 10
        }
        },
        {
        name: "razor leaf",
        available: {
            total: 5,
            remaining: 5
        }
        },
        {
        name: "solar beam",
        available: {
            total: 2,
            remaining: 2
        }
        }
    ]
    button1.innerText = bulbMoves[0].name +" "+ bulbMoves[0].available.remaining+" / "+bulbMoves[0].available.total;
    button2.innerText = bulbMoves[1].name + " " + bulbMoves[1].available.remaining+" / "+bulbMoves[1].available.total;
    button3.innerText = bulbMoves[2].name + " " + bulbMoves[2].available.remaining+" / "+bulbMoves[2].available.total;
    button4.innerText = bulbMoves[3].name + " " + bulbMoves[3].available.remaining +" / "+bulbMoves[3].available.total;


} else if(cookieParse.pokemonName == "Charmander") {
    var charMoves = [
        {
        name: "tackle",
        available: {
            total: 30,
            remaining: 30
        }
        },
        {
        name: "ember",
        available: {
            total: 10,
            remaining: 10
        }
        },
        {
        name: "flame thrower",
        available: {
            total: 5,
            remaining: 5
        }
        },
        {
        name: "bite",
        available: {
            total: 2,
            remaining: 2
        }
        }
    ]
    button1.innerText = charMoves[0].name + " " + charMoves[0].available.remaining+" / "+charMoves[0].available.total;
    button2.innerText = charMoves[1].name + " " + charMoves[1].available.remaining+" / "+charMoves[1].available.total;
    button3.innerText = charMoves[2].name + " " + charMoves[2].available.remaining+" / "+charMoves[2].available.total;
    button4.innerText = charMoves[3].name + " " + charMoves[3].available.remaining+" / "+charMoves[3].available.total;

}else if(cookieParse.pokemonName == "Squirtle") {
    var squirtleMoves = [
        {
        name: "Water Gun",
        available: {
            total: 30,
            remaining: 30
        }
        },
        {
        name: "Surf",
        available: {
            total: 10,
            remaining: 10
        }
        },
        {
        name: "Tail Spin",
        available: {
            total: 5,
            remaining: 5
        }
        },
        {
        name: "Hydro Cannon",
        available: {
            total: 2,
            remaining: 2
        }
        }
    ]
    button1.innerText = squirtleMoves[0].name + " " + squirtleMoves[0].available.remaining+" / "+squirtleMoves[0].available.total;
    button2.innerText = squirtleMoves[1].name + " " + squirtleMoves[1].available.remaining+" / "+squirtleMoves[1].available.total;
    button3.innerText = squirtleMoves[2].name + " " + squirtleMoves[2].available.remaining+" / "+squirtleMoves[2].available.total;
    button4.innerText = squirtleMoves[3].name + " " + squirtleMoves[3].available.remaining+" / "+squirtleMoves[3].available.total;
}
