function getInfo(element) {

    var parent = element.parentElement;
    var pokeImg = parent.querySelector('img').getAttribute('src');
    var pokeName = parent.querySelector('h2').innerText;
    //var selPrice = parent.querySelector('p').innerText;
    //document.getElementById('charBtn').addEventListener("click", function()
    
    var pokemonStatePlayer = {
        pokemonPic : pokeImg,
        pokemonName : pokeName,
        mypokeAttack : "quick attack",
        userMaxHealth : 100,
        userCurrentHealth : 100 
    }
        
    // if(document.getElementById('charBtn').clicked == true) {
    //     var pokemonStatePlayer = {
    //         pokemonPic : pokeImg,
    //         pokemonName : pokeName,
    //         pokemonHP : 50,
    //         mypokeAttack :
    //             {
    //             attackName: "Ember",
    //             attackValue: 50,
    //                 available: {
    //                     remainingAttacks: 10,
    //                     totalAttacks: 10
    //                 }
    //             }
    //     }
              
    // } else if (document.getElementById('squirtBtn').clicked == true) {
    //     var pokemonStatePlayer = {
    //         pokemonPic : pokeImg,
    //         pokemonName : pokeName,
    //         pokemonHP : 50,
    //         mypokeAttack :
    //             {
    //             attackName: "Water Gun",
    //             attackValue: 50,
    //                 available: {
    //                     remainingAttacks: 10,
    //                     totalAttacks: 10
    //                 }
    //             }
    //     }
    // } else if (document.getElementById('bulbBtn').clicked == true) {
    //     var pokemonStatePlayer = {
    //         pokemonPic : pokeImg,
    //         pokemonName : pokeName,
    //         pokemonHP : 50,
    //         mypokeAttack :
    //             {
    //             attackName: "Vine Whip",
    //             attackValue: 50,
    //                 available: {
    //                     remainingAttacks: 10,
    //                     totalAttacks: 10
    //                 }
    //             }
    //     }
    // }
    
    // Computer Moveset
    var pokemonCompState = {
        pokemonName : 'Pikachu',
        computerCurrentHealth : 100,
        computerMaxHealth : 100,
        attack : [
            {
            attackName: "Lightning Bolt",
            attackValue: 50,
                available: {
                    remainingAttacks: 10,
                    totalAttacks: 10
                }
            },
            {
            attackName: "Quick Attack",
            attackValue: 50,
                available: {
                    remainingAttacks: 10,
                    totalAttacks: 10
                }
            },
            {
            attackName: "Double Kick",
            attackValue: 50,
                available: {
                    remainingAttacks: 10,
                    totalAttacks: 10
                }
            },
            {
            attackName: "Thunder Punch",
            attackValue: 50,
                available: {
                    remainingAttacks: 10,
                    totalAttacks: 10
                }
            }
        ]
    }
    Cookies.set('pokeState', pokemonStatePlayer);
    Cookies.set ('pokeComp', pokemonCompState);
}