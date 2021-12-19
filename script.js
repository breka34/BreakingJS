const searchBar = document.getElementById('search-bar');
let container = document.getElementById('items');
let data = [];
searchBar.addEventListener('keyup', (e) => {
    const searchActor = e.target.value;
    const filtered = data.filter((charter) => {
        return (
            charter.name.toLowerCase().includes(searchActor)
        );

    });
    console.log(filtered)
    displayActors(filtered)
});

function load() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            data = (JSON.parse(xhr.responseText));
            displayActors(data);
            console.log(data)
        }
    }
    xhr.open('GET', 'https://www.breakingbadapi.com/api/characters');
    xhr.send();
}
load()

function displayActors(data) {
    let actors = '';
    for (let i = 0; i < data.length; i++) {
        let product = data[i];
        actors += `
        <div class="item" ><img src="${product.img}" />
        <h2>${product.name}</h2>
        </div>`
    }
    container.innerHTML = actors;

}





