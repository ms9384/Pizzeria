import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { IngredientsService } from '../ingredients.service';
import { BuildPizzaService } from '../build-pizza.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {
  ingredients: Ingredients[] = [];
  totalCost: number = 0;
  selectedPizzaID: string = '';

  constructor(
    private ingredientsService: IngredientsService,
    private buildPizzaService: BuildPizzaService,
    private cartService: CartService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.ingredientsService.getIngredients().subscribe
      (data=> {
        this.ingredients = data;
      });

      const cart = this.cartService.getCartItems();

      if(cart.length>0){
        this.selectedPizzaID = cart[cart.length - 1].pizza.id;
      }
  }

  toggleIngredients(event:any, ingredient:Ingredients){
    if(event.target.checked){
      this.buildPizzaService.addIngredients(ingredient);
    }
    else{
      this.buildPizzaService.removeIngredient(ingredient.id);
    }
    this.totalCost=this.buildPizzaService.getTotalCost();
  }

  buildPizza(){
    this.cartService.applyIngredients(
      this.selectedPizzaID,
      this.buildPizzaService.getSelectedIngredients()
    );

    this.buildPizzaService.clearingIngredients();
    
    this.router.navigate(['./cart']);
  }
}
