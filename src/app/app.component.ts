import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pizzeria';

  showNavbar = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {

        if (event instanceof NavigationEnd) {

          const currentUrl = event.urlAfterRedirects;

          const publicPages = [
            '/splash',
            '/login',
            '/signup'
          ];

          this.showNavbar =
            !publicPages.includes(currentUrl) &&
            this.authenticationService.isLoggedIn();
        }

      });
  }
}