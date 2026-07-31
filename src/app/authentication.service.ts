import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  signup(username: string, email:string, password:string):boolean{
    const user = {
      username: username,
      email: email,
      password: password
    };

    localStorage.setItem('user',JSON.stringify(user));
    
    return true;
  }

  login(email:string, password:string):boolean{
    const storedUser=localStorage.getItem('user');
    
    if(!storedUser){
      return false;
    }

    const user = JSON.parse(storedUser);

    if(user.email===email && user.password===password){
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void{
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('loggedIn') === 'true';
  }
}
