import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { title } from 'process';

const routes: Routes = [
  { path: '', component: HomeComponent, title:'Tasty Drop'},
  { path: 'search/:searchTerm', component: HomeComponent, title:'Tasty Drop'},
  { path: 'tag/:tag', component: HomeComponent, title:'Tasty Drop' },
  {path:'food/:id', component:FoodPageComponent, title:'Tasty Drop'},
  {path:'cart-page', component: CartPageComponent, title:'Tasty Drop'},
  {path:'login', component: LoginPageComponent, title:'Tasty Drop'},
  {path:'register', component: RegisterPageComponent, title:'Tasty Drop'},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard], title:'Tasty Drop'},
  {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard], title:'Tasty Drop'},
  {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard], title:'Tasty Drop'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
