$('.js-results-message').hide();
$('.formContainer').hide();

$('.tryItOut').on('click', function (event) {
    $('.intro').hide();
    $('.formContainer').show();

    console.log("here");
});

function getFlavors() {
    let userSelection = $('.js-genres').val();
    console.log('hi');

    if (userSelection === 'Action') {
        $('p.flavors').html('<p>*Recipes that are bitter and meaty for those who prefer substance with their explosions.</p>');
    } else if (userSelection === 'Action-Comedy') {
        $('p.flavors').html('<p>*Recipes that are bitter, meaty and slightly sweet to blend with the comedy.</p>');
    } else if (userSelection === 'Animation') {
        $('p.flavors').html('<p>*Recipes that are sweet, sour and meaty for the whole family to enjoy.</p>');
    } else if (userSelection === 'Adventure') {
        $('p.flavors').html('<p>*Recipes that are salty and meaty to give you that Indiana Jones feeling.</p>');
    } else if (userSelection === 'Comedy') {
        $('p.flavors').html('<p>*Recipes that are sweet and sour to entice your taste buds.</p>');
    } else if (userSelection === 'Crime') {
        $('p.flavors').html('<p>*Recipes that are meaty, spicy and a little bitter because crime can make us all bitter.</p>');
    } else if (userSelection === 'Drama') {
        $('p.flavors').html('<p>*Recipes that are spicy and meaty to fire you up like Olivia Pope.</p>');
    } else if (userSelection === 'Fantasy') {
        $('p.flavors').html('<p>*Recipes that are sweet, meaty and a little salty because Gimli would approve.</p>');
    } else if (userSelection === 'Horror') {
        $('p.flavors').html('<p>*Recipes that are sour and spicy to give you courage!</p>');
    } else if (userSelection === 'Mystery') {
        $('p.flavors').html('<p>*Recipes that are sour and salty since you don\'t know "who-dunit".</p>');
    } else if (userSelection === 'Romance') {
        $('p.flavors').html('<p>*Recipes that are meaty and sweet because any good romance needs both...</p>');
    } else if (userSelection === 'Rom-Com') {
        $('p.flavors').html('<p>*Recipes that are sweet, salty and a little meaty - the best description for most Rom-Coms.</p>');
    } else if (userSelection === 'Sci-fi') {
        $('p.flavors').html('<p>*Recipes that are salty and meaty so you can boldly-go with your taste buds.</p>');
    } else if (userSelection === 'Superhero') {
        $('p.flavors').html('<p>*Recipes that are salty, meaty and a little bitter to match Thanos, Thor and Stark.</p>');
    } else if (userSelection === 'Thriller') {
        $('p.flavors').html('<p>*Recipes that are sweet and bitter becasue we can\'t decide if this is exciting or just scary.</p>');
    }

}

// Step 2: with input from the user make the API call
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
        bitterMax = 1;
        bitterMin = 0;
    } else if (movieGenre == 'Romance') {
        sweetMax = 0.7;
        sweetMin = 0;
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
        sweetMax = 0.2;
        sweetMin = 0;
        sourMax = 1;
        sourMin = 0.3;
        saltyMax = 1;
        saltyMin = 0.5;
        piquantMax = 1;
        piquantMin = 0;
        meatyMax = 1;
        meatyMin = 0.5;
        bitterMax = 0.7;
        bitterMin = 0.2;
    } else if (movieGenre == 'Comedy') {
        sweetMax = 1;
        sweetMin = 0.3;
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
        sweetMax = .75;
        sweetMin = 0.3;
        sourMax = 1;
        sourMin = 0.5;
        saltyMax = 0.5;
        saltyMin = 0;
        piquantMax = 0.3;
        piquantMin = 0;
        meatyMax = 0.6;
        meatyMin = 0.3;
        bitterMax = 0.4;
        bitterMin = 0;
    } else if (movieGenre == 'Sci-fi') {
        sweetMax = 0.3;
        sweetMin = 0;
        sourMax = 0.4;
        sourMin = 0;
        saltyMax = 1;
        saltyMin = 0.65;
        piquantMax = 0.47;
        piquantMin = 0;
        meatyMax = 1;
        meatyMin = 0.8;
        bitterMax = 1;
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
        sweetMax = .6;
        sweetMin = 0.2;
        sourMax = 0.5;
        sourMin = 0;
        saltyMax = 1;
        saltyMin = 0.3;
        piquantMax = 0.5;
        piquantMin = 0;
        meatyMax = 1;
        meatyMin = 0.5;
        bitterMax = 0.75;
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
        sweetMax = 0.72;
        sweetMin = 0.35;
        sourMax = 0.5;
        sourMin = 0;
        saltyMax = 1;
        saltyMin = 0.4;
        piquantMax = 0.6;
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
        sweetMax = 0.6;
        sweetMin = 0.2;
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
            type: "GET"
        })

        .done(function (result) {
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
    $('.formContainer').hide();
    $('.js-results-message').show();
    console.log(results);
    getFlavors();
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
}

//Step 1: get input from the user
function getGenre() {
    $('.js-form').submit(event => {
        event.preventDefault();
        let movieGenre = $('.js-genres').val();
        getDataFromApi(movieGenre);
    });
}


$(getGenre);
