// Waits for content to load
document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    return fetch('./iptest.json')
    .then(function (response) { 
        return response.json(); 
    })
    .then(function (data) { 
        console.log(data); 
    }
    ).catch(function (error) {
        console.error('Error:', error);
    });
}
// test the country.json first

function renderData(user) {
    const ipAddress = document.getElementById('ipAddress');
    const networkIP = document.getElementById('networkIp');
    const cityName = document.getElementById('cityName');
    const region = document.getElementById('region');
    const countryName = document.getElementById('countryName');
    const countryCapital = document.getElementById('countryCapital');
    const countryLatitude = document.getElementById('countryLatitude');
    const countryLongitude = document.getElementById('countryLongitude');
    const timezone = document.getElementById('timezone');
    const utcOffset = document.getElementById('utcOffset');
    const countryCallingCode = document.getElementById('countryCallingCode');
    const currencySymbol = document.getElementById('currencySymbol');
    const currencyName = document.getElementById('currencyName');
    const languages = document.getElementById('languages');
    const countryArea = document.getElementById('countryArea');
    const countryPopulation = document.getElementById('countryPopulation');
    const networkOrganization = document.getElementById('networkOrganization');

    
}