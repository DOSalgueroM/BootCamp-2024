const url = 'https://pokeapi.co/api/v2/pokemon';

function getPokemon(id) {
  return fetch(`${url}/${id}`)
    .then(data => data.json())
    .then(data => data); 
}

async function getPokemon2(id) {
  const json = await fetch(`${url}/${id}`);
  const data = await json.json();
  return data.name;
}

getPokemon2(25).then(name => {
  document.getElementById('name').innerHTML = name;
  console.log(name)
})
function  getImageID(id){
    console.log(id);
    const imageString = '00' + id;
    return imageString.slice (-3);
}

async function fetchRandomPokemon() {
  const pokemonId = Math.floor(Math.random() * 151) + 1;
  const id = getImageID(pokemonId);
  const data = await getPokemon(pokemonId);
  return { id, data };
}

async function getRandomPokemonName() {
  const randomId = Math.floor(Math.random() * 151) + 1;
  const data = await getPokemon(randomId);
  return data.name;
}

async function generateRandomNames(correctName) {
  const names = new Set();
  names.add(correctName);
  
  while (names.size < 3) {
    const randomName = await getRandomPokemonName();
    names.add(randomName);
  }

  return Array.from(names).sort(() => 0.5 - Math.random());
  //return names;
}

async function displayRandomPokemon() {
  const { id, data } = await fetchRandomPokemon();
  const randomNames = await generateRandomNames(data.name);

  const pokemonInfoDiv = document.getElementById('pokemon-info');
  pokemonInfoDiv.innerHTML = `
    <img class="hide" src=${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}>
    <p>Weight: ${data.weight}</p>
    <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    ${randomNames.map(name => `<button onclick="checkName('${name}', '${data.name}')">${name}</button>`).join('')}
  `;
}

function checkName(selectedName, correctName) {
  if (selectedName === correctName) {
    alert('Pokemon correct, congratulations!');
    displayRandomPokemon();
  } else {
    alert('Pokémon incorrect, try again!');
  }
}

function search() {
    const pokemonId = document.getElementById('pokemon-id').value;
    const id = getImageID(pokemonId);

    getPokemon(pokemonId).then(data => {
      if (data) {
        const pokemonInfoDiv = document.getElementById('pokemon-info');
        pokemonInfoDiv.innerHTML = `
        <img class ="hide" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"}>
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Type: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
      }
    });
  }
  