export default class UI {
    constructor(){
        this.profile = document.querySelector('.profile');
    }

    showProfile(user){
        const profileTemplate = `
            <div class="profile">
            <div>
                <div class="profile__photo">
                    <img src="${user.avatar_url}" alt="">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-lg btn-block">View Profile</a>

                    <div class="mb-3">
                        <button type="button" class="btn btn-outline-primary">Public Repos: </button>
                    </div>
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
            <div class="mt-3">
                <ul class="list-group">
                    <li class="list-group-item">Public repo: <span class="badge badge-secondary">${user.public_repos}</span></li>
                    <li class="list-group-item">Public Gists: <span class="badge badge-primary">${user.public_gists}</span></li>
                    <li class="list-group-item">Followers: <span class="badge badge-secondary">${user.followers}</span></li>
                    <li class="list-group-item">Member Since</li>
                </ul>
            </div>
        </div>
        `
        this.profile.insertAdjacentHTML('afterbegin', profileTemplate)
        // console.log('user')
        // console.log(user)
    }
}