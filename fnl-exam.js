var typedtext = '';
function findMeal (){
   typedtext = document.getElementById('meal-search').value;
    connectMeal(typedtext)
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typedtext}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');

     var imgLink = data.meals[0].strMealThumb;
     var title = data.meals[0].strArea;
     var id = data.meals[0].idMeal;
     var instruction = data.meals[0].strInstructions;
     var name = data.meals[0].strMeal;
    

     container.innerHTML = `<p> meal id: ${id} </p>
                           <p><b>Meal title : ${title} </b></p>
                           <p> Meal name : ${name} </p>
                        <img src="${imgLink}" <br/><br><br>
                         <p> <b>cooking instruction :</b> ${instruction} </p><br>
                         <p class="btn btn-primary"><button onclick="moreDetails()">SHOW ALL</button></p>`;
                          
}

function moreDetails() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typedtext}`)
    .then(res=>res.json() )
    .then(data=>loadDetails(data) );
}

function loadDetails(data){
    var newContainer = document.getElementById("main-container2");
    console.table(data.meals[0]);

    newContainer.innerHTML = `<br><h2>Other information</h2>
    <h3>category : ${data.meals[0].strCategory}   </h3>
                       <p>${data.meals[0].strMealThumb}   </p>
                       <p> Types of :${data.meals[0].strTags}   </p>
                        <p> youtube link:${data.meals[0].strYoutube} </P><br><br>  
                         `;

    

}