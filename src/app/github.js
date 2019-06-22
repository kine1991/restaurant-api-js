
export default class GitHub {
    constructor(){
        // Так не делать!
        this.client_id = 'c39cfd946639150e0e1a';
        this.client_secret = 'ee17e52bab02bba8e6eda7fa6c985f2e061eb795';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user){
        const profileRespone = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposRespone = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileRespone.json();
        const repos = await reposRespone.json();
        
        return {
            profile,
            repos
        }
    }


}
console.log('GitHub!')