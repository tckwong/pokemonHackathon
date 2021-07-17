var compHPBAR = document.getElementById("compHPBAR")
var myHPBAR = document.getElementById("myHPBAR")

var getCookie = Cookies.get('pokeState');
console.log(getCookie);
var getCookieComp = Cookies.get('pokeComp');
console.log(getCookieComp);

var cookieParse = JSON.parse(getCookie);
var cookieParseComp = JSON.parse(getCookieComp);

appendtoBattle();
function appendtoBattle() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedName = document.createElement('h2');
    var parent = document.getElementById('parent');

    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pokemonPic);
    parent.append(selectedImg);

    selectedName.innerText = cookieParse.pokemonName;
    parent.append(selectedName);

    // selectedCurrHP.innerText = "Current Health: "+cookieParse.userCurrentHealth;
    // parent.append(selectedCurrHP);
}

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
        document.location.href="/index.html";
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
        reDirecttoHome();
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
        reDirecttoHome();
    }
}

function moveAvailable() {
    if (document.getElementById('Attack1').clicked == true) {

  }
}
function reDirecttoHome() {
    document.location.href="/index.html"; 
}

button1 = document.getElementById('Attack1');
button2 = document.getElementById('Attack2');
button3 = document.getElementById('Attack3');
button4 = document.getElementById('Attack4');

if(cookieParse.pokemonName == "Bulbasaur") {
    // BULBASAUR MOVESET
    var bulbMoves = [
        {
        name: "tackle",
        },
        {
        name: "vine whip",
        },
        {
        name: "razor leaf",
        },
        {
        name: "solar beam",
        }
    ]
    button1.innerText = bulbMoves[0].name ;
    button2.innerText = bulbMoves[1].name ;
    button3.innerText = bulbMoves[2].name ;
    button4.innerText = bulbMoves[3].name ; 
} else if(cookieParse.pokemonName == "Charmander") {
    // CHARMANDER MOVESET
    var charMoves = [
        {
        name: "tackle",
        },
        {
        name: "ember",
        },
        {
        name: "flame thrower",
        },
        {
        name: "bite",
        }
    ]
    button1.innerText = charMoves[0].name ;
    button2.innerText = charMoves[1].name ;
    button3.innerText = charMoves[2].name ;
    button4.innerText = charMoves[3].name;
}else if(cookieParse.pokemonName == "Squirtle") {
    // SQUIRTLE MOVESET
    var squirtleMoves = [
        {
        name: "Water Gun",
        },
        {
        name: "Surf",
        },
        {
        name: "Tail Spin",
        },
        {
        name: "Hydro Cannon",
        }
    ]
    button1.innerText = squirtleMoves[0].name;
    button2.innerText = squirtleMoves[1].name;
    button3.innerText = squirtleMoves[2].name;
    button4.innerText = squirtleMoves[3].name;
}
