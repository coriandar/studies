// TODO:
// onblur? live, auto update, no button

function populatePokedex () {
    let min = parseInt(document.querySelector('input[name="min"]').value);
    let max = parseInt(document.querySelector('input[name="max"]').value);

    if (isNaN(min)) {
        min = 1;
    }
    if (isNaN(max)) {
        max = 10;
    }
    if (min > max) {
        min = 1;
    }
    if (max > 151) {
        max = 151;
    }

    createEntry(min, max);
}

function createEntry(min, max) {
    const pokeNames = [
        'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon' ,'Charizard' ,'Squirtle' ,'Wartortle' ,'Blastoise' ,'Caterpie'
        ,'Metapod' ,'Butterfree' ,'Weedle' ,'Kakuna' ,'Beedrill' ,'Pidgey' ,'Pidgeotto' ,'Pidgeot' ,'Rattata' ,'Raticate'
        ,'Spearow' ,'Fearow' ,'Ekans' ,'Arbok' ,'Pikachu' ,'Raichu' ,'Sandshrew' ,'Sandslash' ,'Nidoran' ,'Nidorina' ,'Nidoqueen'
        ,'Nidoran' ,'Nidorino' ,'Nidoking' ,'Clefairy' ,'Clefable' ,'Vulpix' ,'Ninetales' ,'Jigglypuff' ,'Wigglytuff' ,'Zubat'
        ,'Golbat' ,'Oddish' ,'Gloom' ,'Vileplume' ,'Paras' ,'Parasect' ,'Venonat' ,'Venomoth' ,'Diglett' ,'Dugtrio'
        ,'Meowth' ,'Persian' ,'Psyduck' ,'Golduck' ,'Mankey' ,'Primeape' ,'Growlithe' ,'Arcanine' ,'Poliwag' ,'Poliwhirl' ,'Poliwrath'
        ,'Abra' ,'Kadabra' ,'Alakazam' ,'Machop' ,'Machoke' ,'Machamp' ,'Bellsprout' ,'Weepinbell' ,'Victreebel' ,'Tentacool' ,'Tentacruel'
        ,'Geodude' ,'Graveler' ,'Golem' ,'Ponyta' ,'Rapidash' ,'Slowpoke' ,'Slowbro' ,'Magnemite' ,'Magneton' ,'Farfetchd' ,'Doduo'
        ,'Dodrio' ,'Seel' ,'Dewgong' ,'Grimer' ,'Muk' ,'Shellder' ,'Cloyster' ,'Gastly' ,'Haunter' ,'Gengar' ,'Onix'
        ,'Drowzee' ,'Hypno' ,'Krabby' ,'Kingler' ,'Voltorb' ,'Electrode' ,'Exeggcute' ,'Exeggutor' ,'Cubone' ,'Marowak' ,'Hitmonlee'
        ,'Hitmonchan' ,'Lickitung' ,'Koffing' ,'Weezing' ,'Rhyhorn' ,'Rhydon' ,'Chansey' ,'Tangela' ,'Kangaskhan' ,'Horsea' ,'Seadra'
        ,'Goldeen' ,'Seaking' ,'Staryu' ,'Starmie' ,'Mr. Mime' ,'Scyther' ,'Jynx' ,'Electabuzz' ,'Magmar' ,'Pinsir'
        ,'Tauros' ,'Magikarp' ,'Gyarados' ,'Lapras' ,'Ditto' ,'Eevee' ,'Vaporeon' ,'Jolteon' ,'Flareon' ,'Porygon' ,'Omanyte'
        ,'Omastar' ,'Kabuto' ,'Kabutops' ,'Aerodactyl' ,'Snorlax' ,'Articuno' ,'Zapdos' ,'Moltres' ,'Dratini' ,'Dragonair' ,'Dragonite', 'Mewtwo'
        ,'Mew'];

    const baseURL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const container = document.createElement('section');
    document.body.append(container);

    for (let i = min; i <= max; i++){
        const pokemon = document.createElement('div');
        const label = document.createElement('span');
        const img = document.createElement('img');

        pokemon.classList.add('pokemon');
        label.innerText = `#${i}`;
        label.innerText += `\n${pokeNames[i-1]}`;
        img.src = `${baseURL}${i}.png`;

        pokemon.append(img, label); // allows multiple
        container.appendChild(pokemon); // one per call
    }
}

function removePokemon() {
    const container = document.querySelector('section');
    if (container) {
        container.remove();
    }
}

const showPokemon = document.querySelector('button');

showPokemon.addEventListener('click', function() {
    removePokemon();
    populatePokedex();
});