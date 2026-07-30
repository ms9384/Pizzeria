import { Injectable } from '@angular/core';
import { Ingredients } from './models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class BuildPizzaService {

  selectedIngredients: Ingredients[]= [];


  constructor() {}

  addIngredients(ingredient: Ingredients){

    const exists = this.selectedIngredients.find(item=>item.id===ingredient.id);

    if(!exists){
      this.selectedIngredients.push(ingredient);
    }
  }

  removeIngredient(id:number){
    this.selectedIngredients = this.selectedIngredients.filter(item=>item.id!==id);
  }

  getSelectedIngredients(){
    return this.selectedIngredients;
  }

  getTotalCost(){
    return this.selectedIngredients.reduce((total,ingredient)=>{
      return total+ingredient.price;
    },0);
  }

  clearingIngredients(){
    this.selectedIngredients = [];
  }
}
