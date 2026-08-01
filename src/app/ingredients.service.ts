import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ingredients } from './models/ingredients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) {}

  // return ingredients data from ingredients.json in the format of the interface Ingredients
  getIngredients(): Observable<Ingredients[]>{
    return this.http.get<Ingredients[]>('assets/ingredients.json')
}
}
