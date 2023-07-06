// Waits for content to load
document.addEventListener('DOMContentLoaded', hideData);

// Waits for a click event then performs actions
document.addEventListener('click', (e) => {
    const ipLookUp = document.getElementById('ipLookUp');
    if (e.target.type === 'button') {
        loadCountry();
    }
    if (e.target.type === undefined || e.target.type === null) {
        const body = document.body;
        const modal = document.getElementById('countryDataContainer');
        if (modal) {
            body.removeChild(modal);
        }
    }
    if (e.target.id === 'findMe') {
        fetchData();
    }
})

function hideData() {
    const userData = document.getElementById('userData');
    userData.style.display = 'none';
    infoHeading.style.display = 'none';
}

// Listens for a submit event
document.addEventListener('submit', (e) => {
    e.preventDefault();
    loadCountry();
})


// test the country.json first
async function fetchData() {
    const userData = document.getElementById('userData');
    try {
        const response = await fetch('https://ipapi.co/json');
        const data = await response.json();
        renderUserData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// renders the users ip info
async function renderUserData(user) {
    const calledData = document.getElementsByClassName('Called__Data');
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
    const infoHeading = document.getElementById('infoHeading');
    const ipLookUp = document.getElementById('ipLookUp');
    
    if (calledData) {
        for (let i = 0; i < calledData.length; i++) {
            calledData[i].remove();
        }
    }
        let timeout = setTimeout(clearInfo, 10000)
            userData.style.display = 'flex';
            infoHeading.style.display = 'block';
            ipAddress.innerHTML += ` <span class="Called__Data">${user.ip.toString()}</span>`;
            networkIP.innerHTML += ` <span class="Called__Data">${user.network}</span>`;
            cityName.innerHTML += ` <span class="Called__Data">${user.city}</span>`;
            region.innerHTML += ` <span class="Called__Data">${user.region}</span>`;
            countryName.innerHTML += ` <span class="Called__Data">${user['country_name']}</span>`;
            countryCapital.innerHTML += ` <span class="Called__Data">${user['country_capital']}</span>`;
            countryLatitude.innerHTML += ` <span class="Called__Data">${user.latitude.toString()}</span>`;
            countryLongitude.innerHTML += ` <span class="Called__Data">${user.longitude.toString()}</span>`;
            timezone.innerHTML += ` <span class="Called__Data">${user.timezone}</span>`;
            utcOffset.innerHTML += ` <span class="Called__Data">${user['utc_offset']}</span>`;
            countryCallingCode.innerHTML += ` <span class="Called__Data">${user['country_calling_code']}</span>`;
            currencySymbol.innerHTML += ` <span class="Called__Data">${user.currency}</span>`;
            currencyName.innerHTML += ` <span class="Called__Data">${user['currency_name']}</span>`;
            languages.innerHTML += ` <span class="Called__Data">${String(user.languages).replaceAll(',', ' | ')}</span>`;
            countryArea.innerHTML += ` <span class="Called__Data">${user['country_area'].toLocaleString('en-US')}</span>`;
            countryPopulation.innerHTML += ` <span class="Called__Data">${user['country_population'].toLocaleString('en-US')}</span>`;
            networkOrganization.innerHTML += ` <span class="Called__Data">${user.org}</span>`;
}

function clearInfo() {
    const calledData = document.getElementsByClassName('Called__Data');
    const userData = document.getElementById('userData');
    const infoHeading = document.getElementById('infoHeading');
    if (userData.style.display === 'flex') {
        infoHeading.style.display = 'none';
        userData.style.display = 'none';
        for (let i = 0; i < calledData.length; i++) {
            calledData[i].remove();
        }
    }
}

// https://ipapi.co/json
async function loadCountry() {
    const searchFieldCountry = document.getElementById('searchField').value;
    const searchPopup = document.getElementById('countryDataContainer');
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchFieldCountry}/`);
        const data = await response.json();
        if (searchPopup) {
            searchPopup.remove();
        }
        renderCountry(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// render list items from searched country
function renderCountry(data) {
    if (data !== null || data !== undefined) {
        const div = document.createElement('div');
        const body = document.body;
        body.appendChild(div);
        div.setAttribute('class', 'CountryData__Container');
        div.setAttribute('id', 'countryDataContainer');
        for (let i = 0; i < 21; i++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'Country__Data');
            div.appendChild(li);
        }
    }
    // makes call to update list items with data
    updateData(data);
}

// update list items with data for country searched
function updateData(data) {

    const countryReceivedData = document.getElementsByClassName('Country__Data');

    // checking if data exists before extracting data from the api
    if (countryReceivedData) {
        const currency = data[0]?.currencies;
        const languageInfo = data[0]?.languages;
        let currencyName;
        let currencySymbol;
        let languageSpoken;

        // getting the dynamic properties of currencies
        for (const key in currency) {
            currencyName = currency[key]?.name;
            currencySymbol = currency[key]?.symbol;
        }

        // accessing the dynamic language key
        for (const key in languageInfo) {
            languageSpoken = languageInfo[key]
        }

        // renders searched country info 
        for (let i = 0; i < countryReceivedData.length; i++) {
            switch(i) {
                case 0:
                countryReceivedData[i].innerHTML += data[0].name.official ? `Official Name<span class="Called__Country"> ${data[0].name.official}</span>` : '';
                break;
                case 1:
                countryReceivedData[i].innerHTML += data[0].flags.png ? `Flag <img class="Called__Country Flag" src=${data[0].flags.png} width="200" />` : '';
                break;
                case 2:
                countryReceivedData[i].innerHTML += data[0].coatOfArms.png ? `Coat Of Arms<img class="Called__Country CoatOfArms" src=${data[0].coatOfArms.png} width="200" />` : '';
                break;
                case 3:
                countryReceivedData[i].innerHTML += data[0].name.common ? `Common Name<span class="Called__Country">${data[0].name.common}</span>` : '';
                break;
                case 4:
                countryReceivedData[i].innerHTML += data[0].borders ? `Border<span class="Called__Country">${data[0].borders.reduce((acc, item) => acc + ' ' + item, '')}</span>` : '';
                break;                    
                case 5:
                countryReceivedData[i].innerHTML += data[0].capital ? `Capital<span class="Called__Country">${data[0].capital}</span>` : '';
                break;
                case 6:
                countryReceivedData[i].innerHTML += currencySymbol ? `Currency Name<span class="Called__Country">${currencyName}</span><span class="Called__Country Space">Currency Symbol<br/>${currencySymbol}</span>` : '';
                break;
                case 7:
                countryReceivedData[i].innerHTML += data[0].area ? `Area<span class="Called__Country"> ${data[0].area.toLocaleString('en-US').toString()}</span>` : '';
                break;
                case 8:
                countryReceivedData[i].innerHTML += languageSpoken ? `Languages<span class="Called__Country">${languageSpoken}</span>` : '';
                break;
                case 9:
                countryReceivedData[i].innerHTML += data[0].latlng ? `<span class="Called__Country">${data[0].latlng.reduce((acc, item, idx) => idx === 0 ? acc + ' ' + `latitude ${item}` : acc + ' ' + `longitude ${item}`,'')}<span>` : '';
                break;
                case 11:
                countryReceivedData[i].innerHTML += data[0].population ? `Population<span class="Called__Country">${data[0].population.toLocaleString("en-US")}</span>` : '';
                break;
                case 12:
                countryReceivedData[i].innerHTML += data[0].timezones ? `Time Zone(s)<span class="Called__Country">${data[0].timezones.reduce((acc, item) => acc + ' ' + item, '')}</span>` : '';
                break;
                case 13:
                countryReceivedData[i].innerHTML += data[0].region ? `Region<span class="Called__Country">${data[0].region}</span>` : '';
                break;
                case 14:
                countryReceivedData[i].innerHTML += data[0].subregion ? `Sub-Region<span class="Called__Country">${data[0].subregion}</span>` : '';
                break;
                case 15:
                countryReceivedData[i].innerHTML += data[0].startOfWeek ? `Start Of The Week<span class="Called__Country">${data[0].startOfWeek}</span>` : '';
                break;
                case 16:
                countryReceivedData[i].innerHTML += data[0].independent ? `Independent<span class="Called__Country">${data[0].independent === true ? 'YES' : 'NO'}</span>` : '';
                break;
                case 17:
                countryReceivedData[i].innerHTML += data[0].car.side ? `Car Side<span class="Called__Country">${data[0].car.side}</span>` : ''
                break;  
                default:
                break;
            }
        }
    }
}