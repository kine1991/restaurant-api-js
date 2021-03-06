import axios from 'axios';

import {proxy, key} from '../config';


export class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResults(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            console.log(res)
            // const req = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results =  res.data.recipes;
        } catch(error){
            alert(error);
        }
    }

}

