
const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const result = document.getElementById("result");
const loader = document.getElementById("loader");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

let urlPeople = "https://swapi.dev/api/people/?page=1";
let urlShips = "https://swapi.dev/api/starships/?page=1";

function getData(urlPeople, urlShips) {
    $.ajax({
        url: urlPeople, urlShips,
        success: function (data) {
            console.log("The request was successful", data);
            displayPeople(data.results);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

btnPeople.addEventListener("click", function () {
    getData(urlPeople);
})

function displayPeople(allPeople) {
    if (allPeople != null) {
        result.innerHTML = '';
        result.innerHTML = `
        <div class="row different">
            <div class="col-md-3">Name</div>
            <div class="col-md-2">Height</div>
            <div class="col-md-2">Mass</div>
            <div class="col-md-2">Gender</div>
            <div class="col-md-2">Birth Year</div>
            <div class="col-md-1">Films</div>
        </div>`;

        for (let person of allPeople) {
            result.innerHTML += `
            <div class="row">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>`;
        }
    } else {
        result.innerHTML = `<h2 id="notification"> Please Wait unitl data is loaded!</h2>`
    }
}

btnShips.addEventListener('click', function(){
    getData(urlShips);
})

function displayShips(allShips){
    if(allShips != null) {
        result.innerHTML = '';
        result.innerHTML = `
        <div class="col-md-2">
        </div>
        
        `
    }
}
