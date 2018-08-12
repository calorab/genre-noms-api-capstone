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

to do - decide on whether to use all flavors for each genre or only the most important - needs testing in yummly-apitest.html) 
*/

const YUMMLY_SEARCH_URL = "http://api.yummly.com/v1/api/recipes?_app_id=bdc38e58&_app_key=c9fc6078a1ba99a9705c93899f54de71"

function getYummlyData(searchTerm, callback){
  let params = {

  }
}

function displayApiData(){

}

function getGenre(){
  $('.js-form').submit(event => {
    event.preventDefault();
    let query = $('.js-genres').val();
    console.log(query);

    getYummlyData(query, displayApiData)
  });
}

function runApp(){
  getGenre();
}

$(runApp);
