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

appendtoBattle();

function appendtoBattle() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedName = document.createElement('h2');
    var selectedCurrHP = document.createElement('p');
    //var selectedRent = document.createElement('p');
    var parent = document.getElementById('parent');

    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pokemonPic);
    parent.append(selectedImg);

    selectedName.innerText = cookieParse.pokemonName;
    parent.append(selectedName);

    selectedCurrHP.innerText = cookieParse.userCurrentHealth;
    parent.append(selectedCurrHP);

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
        attackValue: 10,
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
        attackValue: 10,
            available: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        },
        {
        attackName: "Thunder Punch",
        attackValue: 10,
            available: {
                remainingAttacks: 10,
                totalAttacks: 10
            }
        }
    ]
}
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

function computerTurn() {
    //console.log("test");
    var compAttIndex = Math.floor(Math.random() * (pokemonCompState.attack.length));
    console.log("Computer Choose attack " + compAttIndex);
    console.log("Computer Choose move " + pokemonCompState.attack[compAttIndex].attackName);

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

    if(document.getElementById('charBtn').clicked == true) {
        var button1 = {
                attackName: "Ember",
                attackValue: 50,
                    available: {
                        remainingAttacks: 10,
                        totalAttacks: 10
                    }
                }
        
        var button2 = {
                attackName: "FlameThrower",
                attackValue: 50,
                    available: {
                        remainingAttacks: 10,
                        totalAttacks: 10
                    }
        }
        console.log("it worked")
    }
    else {
        console.log("didnt work")
    }