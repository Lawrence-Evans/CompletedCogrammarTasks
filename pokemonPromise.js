// Fetch favourite pokemon from API.
fetch("https://pokeapi.co/api/v2/pokemon/butterfree/")
  .then((res) => res.json())
  .then((result) => {
    // items = result;
    console.log(result.weight);
    console.table(result.abilities);
    console.log(result.name);
  })
  .catch(error => {
    console.log(`ERROR! ${error}`);
  });

// // Fetch favourite pokemon from API as a async function.
// async function favPokemon(api) {
//   let items = await fetch(api);
//   let result = await items.json();
//   console.log(result);
//   console.log(result.weight);
// //   console.log(result.abilities);
// //   console.log(result.name);
// }
// (error) => {
//     console.log(error);
// };

// favPokemon("https://pokeapi.co/api/v2/pokemon/squirtle/");