import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { GetPizzaService } from '../get-pizza.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit{
  
  pizza:Pizza[]=[];

  constructor(
    private pizzaService: GetPizzaService,
    private cartService: CartService
  ){}

  ngOnInit(){
    this.pizzaService.getPizza().subscribe(data=>
      this.pizza = data);
  };

  addToCart(pizza:Pizza){
    this.cartService.addToCart(pizza);
  }
}
