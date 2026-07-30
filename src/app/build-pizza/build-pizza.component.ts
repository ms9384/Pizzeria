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

  selectedIngredients: Ingredients[] = [];

  constructor(
    private ingredientsService: IngredientsService,
    private buildPizzaService: BuildPizzaService,
    private cartService: CartService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.ingredientsService.getIngredients().subscribe({
      next:(data)=> {
        this.ingredients = data;
      },
      error:(err)=> {
        console.log(err);
      }
    });
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
    const customPizza = {
      id: Date.now().toString(),
      type: "Custom",
      price: this.buildPizzaService.getTotalCost(),
      name: "Custom Pizza",
      image: "../../assets/images/custom-pizza.jpg" ,
      description: "Pizza built by the customer",
      ingredients: this.buildPizzaService.getSelectedIngredients().map(i=>i.tname).join(","), 
      topping: []
    };

    this.cartService.addToCart(customPizza);
    this.router.navigate(['/cart']);
  }
  
}
