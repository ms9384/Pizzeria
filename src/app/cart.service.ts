import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';
import { Ingredients } from './models/ingredients';

export interface CartItem{
  pizza:Pizza;
  quantity:number;
  extraIngredients: Ingredients[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private lastOrder: CartItem[] = [];
 
  
  addToCart(pizza:Pizza){
    const existingItem = this.cartItems.find(item=>item.pizza.id===pizza.id);

    if(existingItem){
      existingItem.quantity++;
    }
    else{
      this.cartItems.push({
        pizza: pizza,
        quantity: 1,
        extraIngredients:[]
      });
    }
  }

  getCartItems(): CartItem[]{
    return this.cartItems;
  }

  increaseQuantity(item:CartItem){
    item.quantity++;
  }

  decreaseQuantity(item:CartItem){
    if(item.quantity>1){
      item.quantity--;
    }
  }

  removeItem(item:CartItem){
    this.cartItems = this.cartItems.filter(cartItem=>cartItem!==item);
  }

  clearCart(){
    this.cartItems=[];
  }

  getPizzaTotal():number{
    return this.cartItems.reduce((total,item) => {
      return total+(Number(item.pizza.price)*item.quantity)},0);
  }

  getIngredientsTotal():number{
    return this.cartItems.reduce((total,item) =>{
      const ingredientPrice = item.extraIngredients.reduce((sum,ing)=>{
        return sum+Number(ing.price)
      },0);

      return total+(ingredientPrice*item.quantity)
    },0);
  }

  getGrandTotal():number{
    return this.getPizzaTotal()+this.getIngredientsTotal();
  }
 
  getCartCount():number{
    return this.cartItems.reduce((count,item)=>{
      return count+item.quantity},0);
  }

  applyIngredients(
    pizzaID: string,
    ingredients: Ingredients[]
  ){
    const item = this.cartItems.find(
      cart => cart.pizza.id === pizzaID
    );

    if(item){
      item.extraIngredients = ingredients
    }
  }

  saveOrder(){
  this.lastOrder=[...this.cartItems];
  }

   getLastOrder():CartItem[]{
    return this.lastOrder;
  }
}
