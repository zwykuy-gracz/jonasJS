'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryandNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryandNeighbour('usa');

// const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Coutry not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('germany');
// });

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Coutry not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Coutry not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });
// getCountryData('australia');

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`problem with ${res.status}`);
      console.log(res);
      res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => console.error(`${err.message}`));
};
whereAmI(52.508, 13.381);
