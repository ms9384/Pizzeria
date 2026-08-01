import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit{
  
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      if(this.authService.isLoggedIn()){
        this.router.navigate(['/home']);
      }
      else{
        this.router.navigate(['/login']);
      }
    }, 3000);
  }

  caption: string = "Delectable pizzas, made your way";
}
