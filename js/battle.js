var compHPBAR = document.getElementById("compHPBAR")
var myHPBAR = document.getElementById("myHPBAR")

//Retrieve our cookies and parse them
var getCookie = Cookies.get('pokeState');
var getCookieComp = Cookies.get('pokeComp');
var cookieParse = JSON.parse(getCookie);
var cookieParseComp = JSON.parse(getCookieComp);

function appendtoBattle() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedName = document.createElement('h2');
    var parent = document.getElementById('parent');
    var firstChild = parent.firstElementChild;
    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pokemonPic);
    parent.insertBefore(selectedImg, firstChild);

    selectedName.innerText = cookieParse.pokemonName;
    parent.insertBefore(selectedName, firstChild);
}
appendtoBattle();

var pokemonCompState = {
    pokemonName : 'Pikachu',
    compPokemonHP : 50,
    attack : [
        {
        attackName: "Lightning Bolt",
        attackValue: 12,
            available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        attackName: "Quick Attack",
        attackValue: 10,
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        attackName: "Double Kick",
        attackValue: 7,
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        attackName: "Thunder Punch",
        attackValue: 17,
        available: {
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
    document.getElementById('compHP').innerText = "Pikachu Current Health: " + cookieParseComp.computerCurrentHealth;

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
    var compAttIndex = Math.floor(Math.random() * (pokemonCompState.attack.length));
    console.log("Computer Choose attack " + compAttIndex);
    console.log("Computer Choose move " + pokemonCompState.attack[compAttIndex].attackName);
    myHPBAR.value -= pokemonCompState.attack[compAttIndex].attackValue;
    cookieParse.userCurrentHealth = cookieParse.userCurrentHealth - pokemonCompState.attack[compAttIndex].attackValue;
    compHPBAR.value -= pokemonCompState.attack[compAttIndex].attackValue;

    //Update player currentHealth on DOM
    document.getElementById('myHP').innerText = "My Current Health: " + cookieParse.userCurrentHealth;

    if (cookieParse.userCurrentHealth <= 0) {
        alert("Game ended, you LOSE!");
        reDirecttoHome();
    }
}

function reDirecttoHome() {
    document.location.href="/index.html"; 
}

const button1 = document.getElementById('Attack1');
const button2 = document.getElementById('Attack2');
const button3 = document.getElementById('Attack3');
const button4 = document.getElementById('Attack4');

if(cookieParse.pokemonName == "Bulbasaur") {
    // BULBASAUR MOVESET
    var bulbMoves = [
        {
        name: "tackle",
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        name: "vine whip",
        available: {
            remainingAttacks: 20,
            totalAttacks: 20
            }
        },
        {
        name: "razor leaf",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        },
        {
        name: "solar beam",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        }
    ]

    function reduceAvailablility(move, element) {
        if(bulbMoves[move].available.remainingAttacks > 0) {
            bulbMoves[move].available.remainingAttacks -= 1;
            element.innerText = bulbMoves[move].name+" "+bulbMoves[move].available.remainingAttacks+" "+"/"+bulbMoves[move].available.totalAttacks;
        }else {
            throw new Error("NO MORE MOVES");
        }
    }

    button1.innerText = bulbMoves[0].name+" "+bulbMoves[0].available.remainingAttacks+" "+"/"+bulbMoves[0].available.totalAttacks;
    button2.innerText = bulbMoves[1].name+" "+bulbMoves[1].available.remainingAttacks+" "+"/"+bulbMoves[1].available.totalAttacks;
    button3.innerText = bulbMoves[2].name+" "+bulbMoves[2].available.remainingAttacks+" "+"/"+bulbMoves[2].available.totalAttacks;
    button4.innerText = bulbMoves[3].name+" "+bulbMoves[3].available.remainingAttacks+" "+"/"+bulbMoves[3].available.totalAttacks;
   
}else if(cookieParse.pokemonName == "Charmander") {
    // CHARMANDER MOVESET
    var charMoves = [
        {
        name: "tackle",
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        name: "ember",
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        name: "flame thrower",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        },
        {
        name: "bite",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        }
    ]

    function reduceAvailablility(move,element) {
        if (charMoves[move].available.remainingAttacks > 0) {
        charMoves[move].available.remainingAttacks -= 1;
        element.innerText = charMoves[move].name+" "+charMoves[move].available.remainingAttacks+" "+"/"+charMoves[move].available.totalAttacks;
        }else {
            throw new Error("NO MORE MOVES");
        }
    }

    button1.innerText = charMoves[0].name+" "+charMoves[0].available.remainingAttacks+" "+"/"+charMoves[0].available.totalAttacks;
    button2.innerText = charMoves[1].name+" "+charMoves[1].available.remainingAttacks+" "+"/"+charMoves[1].available.totalAttacks;
    button3.innerText = charMoves[2].name+" "+charMoves[2].available.remainingAttacks+" "+"/"+charMoves[2].available.totalAttacks;
    button4.innerText = charMoves[3].name+" "+charMoves[3].available.remainingAttacks+" "+"/"+charMoves[3].available.totalAttacks;


}else if(cookieParse.pokemonName == "Squirtle") {
    // SQUIRTLE MOVESET
    var squirtleMoves = [
        {
        name: "Water Gun",
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        name: "Surf",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        },
        {
        name: "Tail Spin",
        available: {
            remainingAttacks: 10,
            totalAttacks: 10
            }
        },
        {
        name: "Hydro Cannon",
        available: {
            remainingAttacks: 5,
            totalAttacks: 5
            }
        }
    ]

    function reduceAvailablility(move, element) {
        if (squirtleMoves[move].available.remainingAttacks > 0) {
            squirtleMoves[move].available.remainingAttacks -= 1;
            element.innerText = squirtleMoves[move].name+" "+squirtleMoves[move].available.remainingAttacks+" "+"/"+squirtleMoves[move].available.totalAttacks;
        }else {
            throw new Error("NO MORE MOVES");
        }
    }

    button1.innerText = squirtleMoves[0].name+" "+squirtleMoves[0].available.remainingAttacks+" "+"/"+squirtleMoves[0].available.totalAttacks;
    button2.innerText = squirtleMoves[1].name+" "+squirtleMoves[1].available.remainingAttacks+" "+"/"+squirtleMoves[1].available.totalAttacks;
    button3.innerText = squirtleMoves[2].name+" "+squirtleMoves[2].available.remainingAttacks+" "+"/"+squirtleMoves[2].available.totalAttacks;
    button4.innerText = squirtleMoves[3].name+" "+squirtleMoves[3].available.remainingAttacks+" "+"/"+squirtleMoves[3].available.totalAttacks;
 
}
