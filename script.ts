const getData = (): object => {
    return fetch('country.json').then(response => response.json())
    .then(data => console.log(data))
}

getData();