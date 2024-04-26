// Fetch favourite pokemon from API.
fetch("https://pokeapi.co/api/v2/pokemon/butterfree/")
  .then((res) => res.json())
  .then((result) => {
    console.log(`Name: ${result.name}`);
    console.log(`Weight: ${result.weight}`);
    console.table(result.abilities);
  })
  .catch(error => {
    console.log(`ERROR! ${error}`);
  });

// // Fetch favourite pokemon from API as a async function.
// async function favPokemon(api) {
//   let items = await fetch(api);
//   let result = await items.json();
//   console.log(`Name: ${result.name}`);
//   console.log(`Weight: ${result.weight}`);
//   console.table(result.abilities);
// }
// (error) => {
//     console.log(error);
// };

// favPokemon("https://pokeapi.co/api/v2/pokemon/squirtle/");