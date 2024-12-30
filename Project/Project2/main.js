const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

// fetch recipes function 
const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes ...</h2>";
    try{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const response = await data.json();

        // making div blank
        recipeContainer.innerHTML = "";
        response.recipes.forEach((recipe) => {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            
            // adding content to the recipe div
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" />
                <h3>${recipe.name}</h3>
                <p>${recipe.cuisine}</p>
            `;

            // creating a new button in recipe
            const button = document.createElement("button");
            button.textContent = "View Recipes";
            recipeDiv.appendChild(button);

            // adding event listener to the button
            button.addEventListener("click", () => {
                openRecipePopup(recipe);
            });

            recipeContainer.appendChild(recipeDiv)
        })
    }catch(error){
        console.log(error);
    }
}
