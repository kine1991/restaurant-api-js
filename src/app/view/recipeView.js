import {elements, renderLoader, clearLoader} from '../base';




export const renderRecipe = (recipe) => {
    const templateRecipe = `
    <div class="recipe mt-3">
        <div class="col-xl-6 col-lg-8 col-md-10 col-sm-12  offset-xl-3 offset-lg-2 offset-md-1 offset-sm-0">
            <button type="button" class="btn btn-dark btn-back-to-recipes btn1 my-2">&#8249; Back</button>
            <div class="card mb-3">
            <img src="${recipe.img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.author}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
    `; 
    elements.containerRecipes.insertAdjacentHTML('beforebegin', templateRecipe);
    // elements.containerRecipes.insertAdjacentHTML('afterbegin', templateRecipe);
    // console.log('recipe')
    // console.log(recipe)

};