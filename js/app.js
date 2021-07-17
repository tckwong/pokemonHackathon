function getInfo(element) {

    var parent = element.parentElement;
    var pokeImg = parent.querySelector('img').getAttribute('src');
    var pokeName = parent.querySelector('h2').innerText;
    
    var pokemonStatePlayer = {
        pokemonPic : pokeImg,
        pokemonName : pokeName,
        mypokeAttack : "quick attack",
        userMaxHealth : 100,
        userCurrentHealth : 100
    }
            
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