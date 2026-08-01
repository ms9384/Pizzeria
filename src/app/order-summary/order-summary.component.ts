import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent{

  orderItems: CartItem[] = [];

  deliveryTime = '30-40 mins';

  constructor(){}
}