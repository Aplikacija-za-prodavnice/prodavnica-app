import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountComponent } from './account/account.component';
import { ApplicationComponent } from './application/application.component';
import { CompareProductsMainComponent } from './compare-products-main/compare-products-main.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent, pathMatch:'full'},
  {path:'register',component:RegisterComponent, pathMatch:"full"},
  {path:'app', component:ApplicationComponent, children:[
    {path:'',component:MainComponent,pathMatch:"full"},
    {path:'detaljnije-o-proizvodu', component:ProductDetailsComponent},
    {path:'uporedjivanje-proizvoda', component:CompareProductsMainComponent, children:[
      {path:'', component:CompareProductsComponent,pathMatch:"full"},
      {path:'selekcija-proizvoda',component:SelectProductsComponent,pathMatch:"full"},
      {path:'selekcija-prodavnica',component:SelectMarketsComponent, pathMatch:"full"},
      {path:'detaljnije-o-proizvodu',component:ProductDetailsComponent, pathMatch:"full"},
    ]},
    {path:'account', component:AccountMainComponent,children:[
      {path:'', component:AccountComponent,pathMatch:"full"},
      {path:'shopping-cart', component:ShoppingCartComponent,pathMatch:"full"},
    ]},

  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
 export const routingComponents = [CompareProductsComponent]
