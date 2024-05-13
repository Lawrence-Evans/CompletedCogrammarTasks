// Function works for in VS code debugger but still has CORS Blocked: The Same Origin Policy disallows reading the remote resource
// at http://thecatapi.com/api/images/get?format=src&type=gif. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 301.
// Fetching image URL  using await. Getting the image URL directly from the response
async function randomCat() {
  const url = "http://thecatapi.com/api/images/get?format=src&type=gif";

  // Wrapped in try/catch block to handle errors
  try {
    // Fetch the image URL directly using await
    const response = await fetch(url);
    const imageUrl = response.url;
    console.log(imageUrl);
  } catch (error) {
    console.error("Error fetching cat GIF:", error);
  }
}

// Call the function to get a random cat GIF
randomCat();

// // Working async function that can retrieve jpegs, pngs and gifs from a different cat api.
// // Current cat api docs doesn't seem to support ?format=src&type=gif in url
// // to retrieve only gifs.
// async function randomCat() {
//   let gifUrl = await fetch("https://api.thecatapi.com/v1/images/search")
//     .then((res) => res.json())
//     .then((result) => {
//       cat = result[0];
//       console.log(cat.url);
//       return cat.url;
//       // console.log(result);
//     })
//     .catch((error) => {
//       console.log(`ERROR! ${error}`);
//     });
// }

// randomCat();

// Working promise that can retrieve jpegs, pngs and gifs from different cat api api.
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => res.json())
//   .then((result) => {
//     cat = result[0]
//     console.log(cat.url);
//   })
//   .catch(error => {
//     console.log(`ERROR! ${error}`);
//   });

// // Various attempts to get past "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:////thecatapi.com/api/images/get?format=src&type=gif. (Reason: CORS request not http)."
// async function randomCat() {
//   try {
//     let cat = await fetch('file:////thecatapi.com/api/images/get?format=src&type=gif');
//     catUrl = cat[0];
//     console.log(catUrl.url);
//   } catch (error) {
//     console.log(`ERROR! ${error}`);
//   }
// };

// randomCat();

// // Asynchronus function to fetch random cat gifs.
// async function randomCat() {
//   const requestOptions = {
//     method: "GET",
//     mode: "cors",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(this.currentTutorial),
//   };
//   try {
//     let gifUrl = await fetch("https://api.thecatapi.com/v1/images/search", requestOptions);
//     gifUrl = result;
//     cat = result[1];
//     console.log(cat.url);
//     // console.table(gifUrl.url);
//     // return gifUrl.url;
//   } catch (error) {
//     console.log(`ERROR! ${error}`);
//   }
// }

// randomCat();
