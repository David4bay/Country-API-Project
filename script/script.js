// Waits for content to load
document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://ipapico/json');
        const data = await response.json();
        console.log(data);
        renderData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
// test the country.json first

function renderData(user) {
    console.log(user)
    const userData = document.getElementById('userData');
    const ipAddress = document.getElementById('ipAddress');
    const networkIP = document.getElementById('networkIP');
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
    const dataItems = document.getElementsByClassName('Data__Item');

    if (!user) {
        userData.style.display = 'none';
    } else {
        userData.style.display = 'flex';
        ipAddress.innerHTML += `<br/> <span class="Called__Data">${user.ip.toString()}</span>`;
        networkIP.innerHTML += `<br/> <span class="Called__Data">${user.network}</span>`;
        cityName.innerHTML += `<br/> <span class="Called__Data">${user.city}</span>`;
        region.innerHTML += `<br/> <span class="Called__Data">${user.region}</span>`;
        countryName.innerHTML += `<br/> <span class="Called__Data">${user['country_name']}</span>`;
        countryCapital.innerHTML += `<br/> <span class="Called__Data">${user['country_capital']}</span>`;
        countryLatitude.innerHTML += `<br/> <span class="Called__Data">${user.latitude.toString()}</span>`;
        countryLongitude.innerHTML += `<br/> <span class="Called__Data">${user.longitude.toString()}</span>`;
        timezone.innerHTML += `<br/> <span class="Called__Data">${user.timezone}</span>`;
        utcOffset.innerHTML += `<br/> <span class="Called__Data">${user['utc_offset']}</span>`;
        countryCallingCode.innerHTML += `<br/> <span class="Called__Data">${user['country_calling_code']}</span>`;
        currencySymbol.innerHTML += `<br/> <span class="Called__Data">${user.currency}</span>`;
        currencyName.innerHTML += `<br/> <span class="Called__Data">${user['currency_name']}</span>`;
        languages.innerHTML += `<br/> <span class="Called__Data">${String(user.languages).replace(/,/g, ' | ')}</span>`;
        countryArea.innerHTML += `<br/> <span class="Called__Data">${user['country_area'].toLocaleString('en-US')}</span>`;
        countryPopulation.innerHTML += `<br/> <span class="Called__Data">${user['country_population'].toLocaleString('en-US')}</span>`;
        networkOrganization.innerHTML += `<br/> <span class="Called__Data">${user.org}</span>`;
    }
}