import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Pizza[] = [];
  
  addToCart(pizza:Pizza){
    this.cartItems.push(pizza);
  }

  getCartItems(){
    return this.cartItems;
  }
}
