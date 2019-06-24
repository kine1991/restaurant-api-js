import {elements} from '../base';


export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';


export const showProfile = (user) => {
    const profileTemplate = `
        <div>
            <div class="profile__photo">
                <img src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-lg btn-block">View Profile</a>
            </div>
            <div class="profile__list">
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">Email: ${user.email ? user.login : 'none'}</li>
                        <li class="list-group-item">Name: ${user.name ? user.name : 'none'}</li>
                        <li class="list-group-item">Login: ${user.login}</li>
                        <li class="list-group-item">Company: ${user.email ? user.email: 'none'}</li>
                        <li class="list-group-item">Location:${user.location ? user.location : 'none'} </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="m-5 d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary mx-3">Public repo: <span class="badge badge-primary">${user.public_repos}</span></button>
            <button type="button" class="btn btn-outline-secondary mx-3">Public Gists: <span class="badge badge-secondary">${user.public_gists}</span></button>
            <button type="button" class="btn btn-outline-warning mx-3">Followers: <span class="badge badge-warning">${user.followers}</span></button>
        </div>
        <div class="mt-3">
            <div class="repos"></div>
        </div>
    `;

    elements.profile.insertAdjacentHTML('afterbegin', profileTemplate);
};

export const showRepos = (repos) => {
    let output = '';
    repos.forEach((repo) => {
        output += `
        <div class="card bg-light mb-3" style="max-width: 180rem;">
            <div class="card-body d-flex justify-content-around ">
                <a class="w-50"  href="${repo.html_url}" target="_blank"><h5 class="card-title">${repo.name}</h5></a>
                <div class="w-50" >
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `
    });
    document.querySelector('.repos').innerHTML = output;
}


export const clearProfile = () => elements.profile.innerHTML = '';

export const showAlert = (message, className) => {
    const output = `
        <div class="${className} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    elements.mainHeading.insertAdjacentHTML('afterend', output);
};

export const clearAlert = (className) => {
    const alert = document.querySelector(`.${className}`)
    if(alert){
        alert.parentElement.removeChild(alert)
    }
};
