function fetchData() {
    return fetch('country.json').then(response => response.json())
        .then(data => console.log(data));
}

fetchData()