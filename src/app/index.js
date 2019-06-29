import { key, proxy } from './config'
import { Search } from './model/Search';
import { Recipe } from './model/Recipe'
import * as searchView from './view/searchView';
import * as recipeView from './view/recipeView';

import {elements, renderLoader, clearLoader} from './base';

const state = {}
// *********
// SEARCH
// *********
const searchController = async () => {
    const query = searchView.getInput()
    
    if(query){
        renderLoader(elements.container);
        state.search = new Search(query);
        searchView.cleatInput();

        try{
            await state.search.getResults();
            clearLoader();

            // console.log(state.search.results)
            searchView.renderResults(state.search.results);


        } catch(error){
            alert(error)
        }
        
    }
}


const recipeController = async () => {
    const hash = window.location.hash;
    const id = hash.replace('#', '');

    if(id){
        state.recipe = new Recipe(id);
        await state.recipe.getRecipe();

        await recipeView.renderRecipe(state.recipe);
        // console.log(state.recipe);
        console.log(elements);
        console.log(elements.btn);
        // document.querySelector('.btn-back-to-recipes').addEventListener('click', () => {
        //     console.log('btnBackToRecipes')
        // })
        
    }

}


// const search = new Search('pizza')

// search.getResults('pizza');

// // console.log('searchView.getInput()')
// // console.log(searchView.getInput())


elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit')
    searchController();
    // console.log(searchView.getInput())
});


['hashchange', 'load'].forEach(e => window.addEventListener(e, recipeController));

