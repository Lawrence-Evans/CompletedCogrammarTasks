// Asynchronus function to fetch random cat gifs.
async function randomCat() {
  try {
    let gifUrl = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
    console.log(gifUrl);
  } catch (error) {
    console.log(`ERROR! ${error}`);
  }
};

randomCat();