import axios from 'axios';
import {client_id, client_secret} from '../config';

export class Github {
    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileRespone = await axios.get(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
        const reposRespone = await axios.get(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${client_id}&client_secret=${client_secret}`)

        const profile = profileRespone.data
        const repos = reposRespone.data
        

        return {
            profile,
            repos
        }
    }
}

