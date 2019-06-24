
import {Github} from './model/Github';
import * as githubView from './view/githubView';

import {elements, renderLoader, clearLoader} from './base';



const state = {

}


/** 
 * SEARCH CONTROLLER
 */
const controlGithub = async () => {
  // get query from view
  const query = githubView.getInput();
  if(query){
    //  New search object and add to state
    state.github = new Github();
    // clear input
    githubView.clearInput();
    githubView.clearAlert('alert');
    githubView.clearProfile();

    try{
      renderLoader(elements.main);
      const {profile, repos} = await state.github.getUser(query);
      clearLoader();
      githubView.showProfile(profile);
      githubView.showRepos(repos);
      
    } catch(err){
      clearLoader();

      if(err.message.includes('404')){
        githubView.showAlert(`User <strong>${query}</strong> not found`, 'alert alert-danger');
      }

    }
  }
}


elements.searchForm.addEventListener('submit', (e) => {
    controlGithub()
    e.preventDefault()

})
