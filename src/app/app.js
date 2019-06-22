import GitHub from './github'
import UI from './ui'

const gitHub = new GitHub()
const ui = new UI()




const search = document.querySelector('.search__input');

search.addEventListener('keyup', (e) => {
  const searchText = e.target.value;
  // console.log(searchText)

    if(searchText !== ''){
      gitHub.getUser(searchText).then(data => {
        if(data.profile.message === "Not Found"){
          // show alert
          ui.clearAlert('.alert')
          ui.showAlert(`User <strong>${searchText}</strong> not found`, 'alert alert-danger')
        } else {
          // show profile
          ui.clearProfile()
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
          
  
        }
      })

    } else {
      // Clear Profile
      ui.clearProfile()
    }

})

// addEventListener




// import { inputsAreValid } from "./utils/inputs-are-valid";
// import { parseInputs } from "./utils/parse-inputs";

// export const run = (alertService, componentService) => {
//   alertService.hideErrors();

//   componentService.onClick(() => {
//     alertService.hideErrors();
//     const inputs = componentService.getInputs();
//     const parsedInputs = parseInputs(...inputs);
//     if (inputsAreValid(...parsedInputs)) {
//       const [numA, numB] = parsedInputs;
//       componentService.setResult(numA + numB);
//     } else {
//       componentService.setResult("");
//       alertService.handleAdditionError(inputs, parsedInputs);
//     }
//   });
// };