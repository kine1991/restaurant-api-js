import axios from 'axios';

import {proxy, key} from '../config';

export class Recipe {
    constructor(rId){
        this.rId = rId;
    }

    async getRecipe(){
        try{
            // const res = await axios.get(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.rId}`);
            // this.recipe = res.data.recipe;
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.rId}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }catch(err){
            alert(error);
        }
    }
}