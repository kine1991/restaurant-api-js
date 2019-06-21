
export default class GitHub {
    constructor(){
        // Так не делать!
        this.client_id = 'c39cfd946639150e0e1a';
        this.client_secret = 'ee17e52bab02bba8e6eda7fa6c985f2e061eb795';
    }
    
    async getUser(user){
        const profileRespone = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileRespone.json();
        
        return {
            profile
        }
    }
}
console.log('GitHub!')