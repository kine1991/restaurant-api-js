import axios from 'axios';

import {proxy, key} from '../config';


export class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResults(){
        try{
            const req = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results =  req.data.recipes;
            // console.log(recipes)
        } catch(error){
            alert(error);
        }
    }

}

