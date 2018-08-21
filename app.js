// Step 2: with input from the user make the API call

$('.js-results-message').hide();

function getDataFromApi(movieGenre) {

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
        'flavor.piquant.max': piquantMax,
        requirePictures: true
    };
    var getResult = $.ajax({
            url: "https://api.yummly.com/v1/api/recipes?_app_id=bdc38e58&_app_key=c9fc6078a1ba99a9705c93899f54de71",
            data: params, //says get from params above
            dataType: "json",
            /*set the call type GET / POST*/
            type: "GET"
        })
        .done(function (result) {
            console.log(result);
            const output = result.matches.map((item) => displayApiData(item));
            $('.recipeResults').html(output);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

// Step 3: With api data results - display them
function displayApiData(results) {
    console.log("there");
    $('.js-form').hide();
    $('.js-results-message').show();
    return `
        <a class='js-results-container' href= 'https://www.yummly.com/recipe/${results.id}' target="_blank">
        <div class="resultsContainer">
        <h2 class="recipeName">${results.recipeName}</h2>
        <p class="rating">Rating: ${results.rating} out of 5</p>
        <picture>
            <img class="recipePicture" src="${results.smallImageUrls}" alt="Recipe Picture" style="width:auto">
        </picture>
        </div>
    </a>`
}

function restartSearch() {
    $('.js-results-message').click('.js-restart', function (event) {
        location.reload();
        getDataFromApi();
    });
    console.log(`restartApp ran`);
}

//Step 1: get input from the user
function getGenre() {
    $('.js-form').submit(event => {
        event.preventDefault();
        let movieGenre = $('.js-genres').val();
        console.log(movieGenre);

        getDataFromApi(movieGenre);
    });
}



$(getGenre);
