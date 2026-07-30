import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: Pizza[] = [];

  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cartItems=this.cartService.getCartItems();
  }

}
