function fetchData() {
    return fetch('country.json').then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); }).catch(function (error) {
        console.error('Error:', error);
    });
}
var loadData = fetchData();
load;
