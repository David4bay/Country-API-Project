// const div = document.getElementById('data');
// const official = document.getElementById('officialName');
// const capital = document.getElementById('capital');
// const continent = document.getElementById('continent');
// const languages = document.getElementById('languages');
// const currencies = document.getElementById('currency');


// function fetchData() {
//     fetch('country.json')
// .then(response => response.json()).then((data) => {
//        return countryData(data); 
//     // console.log(data.map(info => info.name));
// });
// };

// function countryData(info) {
//     const officialName = info[0].name.common
//     const borders = info[0].borders.reduce((acc, border) => acc + " | " + border, " ")
//     const capital = info[0].capital.reduce((acc, border) => acc + " | " + border, " ")
//     const continent = info[0].continents.reduce((acc, border) => acc + " | " + border, " ");
//     const languages = info[0].languages.spa;
//     const currencyName = info[0].currencies.COP.name;
//     const currencySymbol = info[0].currencies.COP.symbol;
//     console.log(officialName, borders, capital, continent, languages, currencyName, currencySymbol)
//     official.innerText = officialName;
//     currencies.innerText = currencyName + ' ' + currencySymbol;

// }

// fetchData();
