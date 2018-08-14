/*
Okay what do I need to do here:
1. Hide/show form/results = ( .page display none && .show display: block  ||  .hide() && .show() )
2. See genre choice ( $('.js-genres').val() or something similar )
3. Link Genre choice to flavor (could create an array and iterate with  ENTER_METHOD_TO_BE_USED )
4. See submit (  $('.js-getRecipes').submit( => { ... })  etc )
5. On submit do:
    a. getJSON function (with callback ENTER_callback_HERE - probably displayResults/Recipes/ETC)
    b. If/else (?) to get genre choice (.val() most likely I feel like)
    c. Display results
    d. Render results - the HTML that will go in .recipeResults)
6. If error ( displayResults with If/Else statement ? )
7.init genreNoms
*/
const YUMMLY_SEARCH_URL = "http://api.yummly.com/v1/api/recipes?_app_id=bdc38e58&_app_key=c9fc6078a1ba99a9705c93899f54de71"

let movieGenre = $('.js-genres').val();
console.log(movieGenre);

let sweetMax = 0;
let sweetMin = 0;
let sourMax = 0;
let sourMin = 0;
let saltyMax = 0;
let saltyMin = 0;
let piquantMax = 0;
let piquantMin = 0;
let meatyMax = 0;
let meatyMin = 0;
let bitterMax = 0;
let bitterMin = 0;

if (movieGenre == 'Mystery') {
    sweetMax = 0.5;
    sweetMin = 0;
    sourMax = 1;
    sourMin = 0.5;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 0.2;
    piquantMin = 0;
    meatyMax = 0.5;
    meatyMin = 0;
    bitterMax = 0.3;
    bitterMin = 0;
} else if (movieGenre == 'Romance') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 0.4;
    sourMin = 0;
    saltyMax = 0.6;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 0.8;
    bitterMin = 0.24;
} else if (movieGenre == 'Crime') {
    sweetMax = 0;
    sweetMin = 0;
    sourMax = 0.8;
    sourMin = 0.3;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 1;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0;
    bitterMax = 0.7;
    bitterMin = 0.2;
} else if (movieGenre == 'Comedy') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 1;
    sourMin = 0.5;
    saltyMax = 0.5;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 0.6;
    meatyMin = 0;
    bitterMax = 1;
    bitterMin = 0.3;
} else if (movieGenre == 'Animation') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 1;
    sourMin = 0.5;
    saltyMax = 0.5;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 0.6;
    meatyMin = 0;
    bitterMax = 0.4;
    bitterMin = 0;
} else if (movieGenre == 'Sci-fi') {
    sweetMax = 0.6;
    sweetMin = 0.1;
    sourMax = 0.4;
    sourMin = 0;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 0.4;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 0.75;
    bitterMin = 0.25;
} else if (movieGenre == 'Adventure') {
    sweetMax = 0.35;
    sweetMin = 0;
    sourMax = 0.5;
    sourMin = 0;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 0.5;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 0.6;
    bitterMin = 0;
} else if (movieGenre == 'Horror') {
    sweetMax = 0.3;
    sweetMin = 0;
    sourMax = 0.8;
    sourMin = 0;
    saltyMax = 1;
    saltyMin = 0;
    piquantMax = 1;
    piquantMin = 0.5;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = .75;
    bitterMin = 0;
} else if (movieGenre == 'Fantasy') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 0.3;
    sourMin = 0;
    saltyMax = 0.75;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 0.5;
    bitterMin = 0;
} else if (movieGenre == 'Action') {
    sweetMax = 0.3;
    sweetMin = 0;
    sourMax = 0.3;
    sourMin = 0;
    saltyMax = 0.6;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 1;
    bitterMin = 0.5;
} else if (movieGenre == 'Rom-Com') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 0.3;
    sourMin = 0;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 0.4;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.35;
    bitterMax = 0.5;
    bitterMin = 0;
} else if (movieGenre == 'Thriller') {
    sweetMax = 1;
    sweetMin = 0.5;
    sourMax = 0.3;
    sourMin = 0;
    saltyMax = 0.5;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.35;
    bitterMax = 1;
    bitterMin = 0.5;
} else if (movieGenre == 'Drama') {
    sweetMax = 1;
    sweetMin = 0.35;
    sourMax = 0.3;
    sourMin = 0;
    saltyMax = 0.5;
    saltyMin = 0;
    piquantMax = 1;
    piquantMin = 0.5;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 0.5;
    bitterMin = 0;
} else if (movieGenre == 'Action-Comedy') {
    sweetMax = 1;
    sweetMin = 0.3;
    sourMax = 1;
    sourMin = 0.3;
    saltyMax = 0.5;
    saltyMin = 0;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 1;
    bitterMin = 0.5;
} else if (movieGenre == 'Superhero') {
    sweetMax = 0.3;
    sweetMin = 0;
    sourMax = 0.5;
    sourMin = 0;
    saltyMax = 1;
    saltyMin = 0.5;
    piquantMax = 0.3;
    piquantMin = 0;
    meatyMax = 1;
    meatyMin = 0.5;
    bitterMax = 1;
    bitterMin = 0.5;
}

var params = {
    'flavor.sweet.min': sweetMin,
    'flavor.sweet.max': sweetMax,
    'flavor.sour.min': sourMin,
    'flavor.sour.max': sourMax,
    'flavor.salty.min': saltyMin,
    'flavor.salty.max': saltyMax,
    'flavor.meaty.min': meatyMin,
    'flavor.meaty.max': meatyMax,
    'flavor.bitter.min': bitterMin,
    'flavor.bitter.max': bitterMax,
    'flavor.piquant.min': piquantMin,
    'flavor.piquant.max': piquantMax
};

function getYummlyData(searchTerm, callback) {
    let query = params;

    $.getJson(YUMMLY_SEARCH_URL, query, callback)
}

function displayApiData(data) {
    const result = data.matches.map((item, index) => {
        renderYummlyData(item);
        $('recipeResults').html(result);
    });
}

function renderYummlyData(results) {
    return `<a class='js-results-container' href='${results.sourceRecipeUrl}' target="_blank">
    <div>
    <h2>${results.recipeName}</h2>
    <p>Rating: ${results.rating} out of 5</p>
    <picture>
      <img src="${results.smallImageUrls}" alt="Recipe Picture" style="width:auto">
    </picture>
    </div>
  </a>`
}

function getGenre() { //tested
    $('.js-form').submit(event => {
        event.preventDefault();
        let query = $('.js-genres').val();

        getYummlyData(query, displayApiData)
    });
}

function runApp() {
    getGenre();
}

$(runApp);
