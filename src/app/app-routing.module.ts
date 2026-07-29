import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'order-pizza', component:OrderPizzaComponent},
  {path:'build-pizza', component:BuildPizzaComponent},
  {path:'cart', component:CartComponent},
  {path:'**', redirectTo:'HomeComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
