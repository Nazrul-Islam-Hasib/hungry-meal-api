const searchBtn = document.getElementById('meal-search');
const mealNameInput = document.getElementById('meal-name');
const errorMsg = document.getElementById("error-msg");

searchBtn.addEventListener('click', function(){ 

    let mealValue = mealNameInput.value;
    if (mealValue.length === 1) {
        apiCall(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealValue}`)
    } else {
        apiCall(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue}`)
    }
})

function apiCall(api){
    fetch(api)
    .then(res => res.json())
    .then(data => {
        showData(data.meals)
    }).catch(error => {
        console.log(error);
        errorMsg.innerText = "Meals not found " + error;
        errorMsg.style.display = "block";
    });
}


function showData(data){
    errorMsg.style.display = "none";
    data.forEach(res => {
        let container = document.querySelector("#meal-content");
        let card = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardBody = document.createElement("div");
        let cardTitle = document.createElement("h5");
        let col = document.createElement("div");
  
        card.classList.add("card")

        cardImg.src = res.strMealThumb;
        cardImg.classList.add("card-img-top");
        card.appendChild(cardImg);

        
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        
        cardTitle.innerText = res.strMeal;
        cardTitle.classList.add("card-title")
        cardBody.appendChild(cardTitle);

        
        col.classList.add("col-md-4")
        col.appendChild(card);
        
        container.appendChild(col);

        card.addEventListener('click', function(){
            console.log(res.idMeal);
            showIngredient(res.idMeal);
        })
        
    });
}


function showIngredient(apiValue){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${apiValue}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0].strIngredient1);
        let container = document.querySelector("#meal-ingredient");
        container.style.borderBottom = "2px solid blanchedalmond";
        document.getElementById("meal-ingredient-text").style.display = "block";
        let card = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardBody = document.createElement("div");
        let cardTitle = document.createElement("h5");
        let cardLi1 = document.createElement("li");
        let cardLi2 = document.createElement("li");
        let cardLi3 = document.createElement("li");
        let cardLi4 = document.createElement("li");
        let cardLi5 = document.createElement("li");
        let cardLi6 = document.createElement("li");
        let cardLi7 = document.createElement("li");
        let cardLi8 = document.createElement("li");
        let cardLi9 = document.createElement("li");
        let cardLi10 = document.createElement("li");
        let col = document.createElement("div");
  
        card.classList.add("card")

        cardImg.src = data.meals[0].strMealThumb;
        cardImg.classList.add("card-img-top");
        card.appendChild(cardImg);

        
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        
        cardTitle.innerText = data.meals[0].strMeal;
        cardTitle.classList.add("card-title")
        cardBody.appendChild(cardTitle);

        cardLi1.innerText = data.meals[0].strIngredient1;
        cardLi2.innerText = data.meals[0].strIngredient2;
        cardLi3.innerText = data.meals[0].strIngredient3;
        cardLi4.innerText = data.meals[0].strIngredient4;
        cardLi5.innerText = data.meals[0].strIngredient5;
        cardLi6.innerText = data.meals[0].strIngredient6;
        cardLi7.innerText = data.meals[0].strIngredient7;
        cardLi8.innerText = data.meals[0].strIngredient8;
        cardLi9.innerText = data.meals[0].strIngredient9;
        cardLi10.innerText = data.meals[0].strIngredient10;
        cardBody.appendChild(cardLi1);
        cardBody.appendChild(cardLi2);
        cardBody.appendChild(cardLi3);
        cardBody.appendChild(cardLi4);
        cardBody.appendChild(cardLi5);
        cardBody.appendChild(cardLi6);
        cardBody.appendChild(cardLi7);
        cardBody.appendChild(cardLi8);
        cardBody.appendChild(cardLi9);
        cardBody.appendChild(cardLi10);
        
        col.classList.add("col-md-4")
        col.appendChild(card);
        
        container.appendChild(col);
    })
}