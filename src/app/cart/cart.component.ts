import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  expandedItem: CartItem | null=null;

  constructor(
    private cartService: CartService
  ) {}

  loadCart(){
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit(): void {
    this.loadCart();
  }

  increase(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  toggleIngredients(item: CartItem){
    if(this.expandedItem===item){
      this.expandedItem=null;
    }
    else{
      this.expandedItem=item;
    }
  }

  getPizzaTotal():number {
    return this.cartService.getPizzaTotal();
  }

  getIngredientTotal():number {
    return this.cartService.getIngredientsTotal();
  }

  getItemTotal(item:CartItem):number{
    const ingredientTotal = item.extraIngredients.reduce((sum,ing)=>{
      return sum + Number(ing.price);
    },0);

    return (Number(item.pizza.price) + ingredientTotal) * item.quantity;
  }

  getSubTotal():number{
    return this.cartItems.reduce((total,item)=>{
      return total+this.getItemTotal(item);
    },0);
  }

  getGrandTotal():number {
    return this.cartService.getGrandTotal();
  }

  pay() {
    alert("Payment Successful!");
    this.clearCart();
  }
}