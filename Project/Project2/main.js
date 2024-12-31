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

// function to fetch ingredients
const fetchIngredients = (recipe) => {
    let ingredientsList = "";
    for(let i = 1; i <= 20; i++){
        const ingredient = recipe.ingredients[i];
        if(ingredient){
            ingredientsList += `<li>${ingredient}</li>`;
        }else{
            break;
        }
    }

    return ingredientsList;
}

// function to fetch instructions
const fetchInstructions = (recipe) =>{
    let instructionList = "";
    for(let i = 1; i <= 20; i++){
        const instruction = recipe.instructions[i];
        if(instruction){
            instructionList += `<li>${instruction}</li>`;
        }else{
            break;
        }
    }
    return instructionList;
}

const openRecipePopup = (recipe) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${recipe.name}</h2>
        <h3 class="ingredientName">Ingredients: </h3>
        <ol class="ingredientList">
            ${fetchIngredients(recipe)}
        </ol>
        <div class="recipeInstruction">
            <h3>Instructions: </h3>
            <ol>
                ${fetchInstructions(recipe)}
            </ol>
        </div>
    `;

    recipeDetailsContent.parentElement.style.display = "block";
};

recipeCloseBtn.addEventListener("click", () => {
    recipeDetailsContent.parentElement.style.display = "none";
});

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
})