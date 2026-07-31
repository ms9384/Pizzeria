import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public cartService:CartService,
    public router: Router
  ){}

  isCartPage(): boolean{
    return this.router.url==='/cart'
  }

}
