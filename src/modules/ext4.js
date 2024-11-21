"use strict";

import "https://unpkg.com/leaflet@latest/dist/leaflet.js?module";
import "https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js?module";

import { h } from "../core/pragma";

const app = document.querySelector("#root");
const section = document.querySelector(".hello");
const h2 = document.createElement("h2");
h2.innerText = "Module 4. AJAX";

// Make an app that retrieves information about a TV series you enter
// and displays it in the console. (2p)
// API to use: TVMaze API
// First, make a valid HTML page with a search form. Example form:
// <form action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">
// </form>
// Test the form. The result should be a page full of JSON formatted data.

const TVMazeAPI = "https://api.tvmaze.com/search/shows";

const tvform = document.createElement("form");
tvform.action = TVMazeAPI;
tvform.innerHTML = `
<label for="query">Search for a TV-show:</label>
<input id="query" name="q" type="text">
<input type="submit" value="Search">
`;

// Develop the app further.
// Add JavaScript that gets the value entered to the form and sends a
// request with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}.
// Print the search result to the console. (3p)

const tvform2 = document.createElement("form");
tvform2.action = TVMazeAPI;
tvform2.innerHTML = `
<label for="query">Search for a TV-show:</label>
<input id="query" name="q" type="text">
<input type="submit" value="Search">
`;

tvform2.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.currentTarget[0].value;
  const url = `${TVMazeAPI}?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

// Develop the app even further. Print the following information for all series
// from the search result on the web page. (7p)
// required information: Name, link to details (url), medium image and summary
// show the name in <h2> element
// show the url in <a> element. Also add target="_blank" to the link.
// show the medium image with <img src="" alt="">. Add medium image to src
// attribute and name property to alt attribute.
// some TV-shows don't have images. This will cause an error. You can fix this
// by adding ? operator to image property. Example: tvShow.show.image?.medium;.
// This is called optional chaining.
// show summary in <div> element (not <p>). This is because the summary is
// already in <p> element, and the result will not be valid if <p> is inside another <p>.
// collect the elements to <article> elements and append <article> elements to the HTML document.
// make <div id="results"> element to the HTML document where you append the <article> elements.
// clear the old results with innerHTML = '' before you append the new results.

const tvform3 = document.createElement("form");
tvform3.action = TVMazeAPI;
tvform3.innerHTML = `
<label for="query">Search for a TV-show:</label>
<input id="query" name="q" type="text">
<input type="submit" value="Search">
`;

tvform3.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.currentTarget[0].value;
  const url = `${TVMazeAPI}?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = document.createElement("div");
      results.id = "results";
      for (const tv of data) {
        const article = document.createElement("article");
        const heading = document.createElement("h2");
        heading.innerText = tv.show.name;
        article.appendChild(heading);
        const image = document.createElement("figure");
        const img = document.createElement("img");
        img.src = tv.show.image?.medium;
        img.alt = tv.show.name;
        image.appendChild(img);
        const caption = document.createElement("figcaption");
        caption.innerText = tv.show.summary;
        image.appendChild(caption);
        article.appendChild(image);
        results.appendChild(article);
      }
      tvform3.appendChild(results);
    });
});

// Develop the app even further. Optional chaining is not the best way to handle
// missing image. Use ternary operator or if/else to add a default image if
// TV-show is missing image property. (2p)
// Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.

const tvform4 = document.createElement("form");
tvform4.action = TVMazeAPI;
tvform4.innerHTML = `
<label for="query">Search for a TV-show:</label>
<input id="query" name="q" type="text">
<input type="submit" value="Search">
`;

tvform4.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = event.currentTarget[0].value;
  const url = `${TVMazeAPI}?q=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const results = document.createElement("div");
      results.id = "results";
      for (const tv of data) {
        const article = document.createElement("article");
        const heading = document.createElement("h2");
        heading.innerText = tv.show.name;
        article.appendChild(heading);
        const image = document.createElement("figure");
        const img = document.createElement("img");
        img.src =
          tv.show.image === null
            ? "https://via.placeholder.com/210x295?text=Not%20Found"
            : tv.show.image.medium;
        img.alt = tv.show.name;
        image.appendChild(img);
        const caption = document.createElement("figcaption");
        caption.innerText = tv.show.summary;
        image.appendChild(caption);
        article.appendChild(image);
        results.appendChild(article);
      }
      tvform4.appendChild(results);
    });
});

// Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
// API to use: chucknorris.io
// Send a request to https://api.chucknorris.io/jokes/random and print only
// the joke to the console (that would be the 'value' property)
// No need to add a form.

const chucknorrisApi = "https://api.chucknorris.io/jokes/random";

async function getRandomChuckNorrisJoke() {
  return fetch(chucknorrisApi)
    .then((response) => response.json())
    .then((data) => data.value);
}

getRandomChuckNorrisJoke().then((joke) =>
  console.log(`Random Chuck Norris joke: ${joke}`)
);

// Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
// <article>
//     <p>Joke here<p>
// </article>

const chucknorrisSearchApi = "https://api.chucknorris.io/jokes/search";

async function getChuckNorrisJokes(searchTerm) {
  return fetch(`${chucknorrisSearchApi}?query=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => data);
}
const jokeform = document.createElement("form");

jokeform.innerHTML = `
  <label for="joke-search">Search for a Chuck Norris joke:</label>
  <input type="text" id="joke-search" name="joke-search" />
  <button type="submit">Search</button>
`;

jokeform.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = event.currentTarget[0].value;
  getChuckNorrisJokes(searchTerm).then((jokes) => {
    console.log(jokes.result);
    for (const joke of jokes.result) {
      const article = document.createElement("article");
      article.innerHTML = `
        <p>${joke.value}</p>
      `;
      jokeform.appendChild(article);
    }
  });
});

// Advanced. Routing with digitransit (16p)
// Not for the faint-hearted. Don't do this if it interferes with the project. It's not worth it.
// Create an app that shows the route from user defined address to school (Karaportti 2).
// You need to have a form where user adds an address. After the form is submitted,
// the route is displayed on a map. Show also the starting and ending time of the trip.
// Not each part, just the start and end times.
// Example: JS, HTML
// You'll need this Leaflet plugin to make the example work.
// Here is an example on how to use places/addresses with coordinates.
// To get coordinates from address, you can use address search
// If you get cors errors (which is likely not going to happen) use this fix.

const first = "b3cc35ba80c94acf817f653692a074a6";
const second = "70851d8437ef4e10886ddbc511cc9725";

const mapdiv = document.createElement("div");
mapdiv.id = "map";
mapdiv.style.height = "400px";
mapdiv.style.width = "100%";

const GEOCODE_API = "https://api.digitransit.fi/geocoding/v1/search";
const ROUTING_API =
  "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";

const DEST_LAT = 60.224006442257924;
const DEST_LON = 24.758516049269925;

const map = L.map(mapdiv).setView([DEST_LAT, DEST_LON], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const routeControl = L.Routing.control({
  waypoints: [],
  routeWhileDragging: true,
}).addTo(map);

async function getCoordinates(apiKey, address) {
  try {
    const response = await fetch(
      `${GEOCODE_API}?text=${encodeURIComponent(address)}&size=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "digitransit-subscription-key": `${apiKey}`,
        },
      }
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const [lon, lat] = data.features[0].geometry.coordinates;
      return { lat, lon };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch coordinates:", error);
    return null;
  }
}

async function getDigitransitRouteToSchool(apiKey, from, to) {
  try {
    const response = await fetch(`${ROUTING_API}`, {
      method: "POST",
      headers: {
        "digitransit-subscription-key": `${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          plan(
            from: {lat: ${from.lat}, lon: ${from.lon}}
            to: {lat: ${to.lat}, lon: ${to.lon}}
            numItineraries: 1
          ) {
            itineraries {
              legs {
                startTime
                endTime
                mode
                duration
                distance
                legGeometry {
                  points
                }
              }
            }
          }
        }`,
      }),
    });
    const data = await response.json();
    const itinerary = data.data.plan.itineraries[0];
    return itinerary ? itinerary.legs : null;
  } catch (error) {
    console.error("Failed to fetch route:", error);
    return null;
  }
}

const transitform = document.createElement("form");

transitform.innerHTML = `
  <label for="transit-from">From:</label>
  <input type="text" id="transit-from" name="transit-from" />
  <label for="api-key">Api key:</label>
  <input type="text" id="api-key" name="api-key" />
  <button type="submit">Search</button>
`;

transitform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userAddress = event.currentTarget[0].value;
  const userApiKey = event.currentTarget[1].value;
  // Get coordinates
  const from = await getCoordinates(userApiKey, userAddress);
  const to = { lat: DEST_LAT, lon: DEST_LON };

  if (!from) {
    alert("Failed to get coordinates for the provided address.");
    return;
  }

  // Get route details
  const legs = await getDigitransitRouteToSchool(userApiKey, from, to);

  if (!legs) {
    alert("Failed to find a route.");
    return;
  }
  const waypoints = [L.latLng(from.lat, from.lon), L.latLng(to.lat, to.lon)];
  routeControl.setWaypoints(waypoints);

  // Display start and end time
  const startTime = new Date(legs[0].startTime);
  const endTime = new Date(legs[legs.length - 1].endTime);

  const tripInfo = document.createElement("p");
  tripInfo.innerText = `Trip Start: ${startTime.toLocaleTimeString()} - Trip End: ${endTime.toLocaleTimeString()}`;
  transitform.appendChild(tripInfo);
});

const div = document.createElement("div");

div.append(
  h2,
  tvform,
  tvform2,
  tvform3,
  tvform4,
  jokeform,
  transitform,
  mapdiv
);
section.prepend(div);
app.appendChild(section);
