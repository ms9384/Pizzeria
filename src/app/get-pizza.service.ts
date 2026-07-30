import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pizza } from './models/pizza';

@Injectable({
  providedIn: 'root'
})
export class GetPizzaService {

  constructor(private http:HttpClient) { }

  // return pizza data from pizza.json in the format of the interface Pizza
  getPizza(){
    return this.http.get<Pizza[]>('assets/pizza.json')
  }
}
