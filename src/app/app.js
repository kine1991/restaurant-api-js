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

          document.querySelector('.main-view').insertAdjacentHTML('afterbegin', 'Not Found')
        } else {
          // show profile
          // console.log(data)
          ui.showProfile(data.profile)
            
        }
      })

    } else {
      // Clear Profile

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