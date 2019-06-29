import { key, proxy } from './config'
import { Search } from './model/Search';
import * as searchView from './view/searchView';

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




