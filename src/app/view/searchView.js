import {elements, renderLoader, clearLoader} from '../base';


export const getInput = () => elements.searchInput.value;
export const cleatInput = () => elements.searchInput.value = '';




const renderRecipe = (recipe) => {
    const templateRecipe = `
    <div class="col-xl-3 col-lg-4 col-md-6">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${recipe.image_url}" style="height: 225px; width: 100%; display: block;" data-holder-rendered="true">
      <div class="card-body">
        <p class="card-text">${recipe.title}</p>
        <p class="card-text">${recipe.publisher}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="#${recipe.recipe_id}" class="btn btn-sm btn-outline-secondary view-recipe">View</a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
    </div>
    `;
    elements.containerRecipes.insertAdjacentHTML('afterbegin', templateRecipe)
};

export const renderResults = recipes => {
    recipes.forEach(recipe => {
        renderRecipe(recipe);
        // console.log('recipe')
        console.log(recipe)
    });
}