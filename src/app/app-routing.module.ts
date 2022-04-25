import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountComponent } from './account/account.component';
import { ApplicationComponent } from './application/application.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { CategoriesSearchComponent } from './categories-search/categories-search.component';
import { CategoryComponent } from './category/category.component';
import { CompareProductsMainComponent } from './compare-products-main/compare-products-main.component';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MarketSearchComponent } from './market-search/market-search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { SearchMainComponent } from './search-main/search-main.component';
import { SearchComponent } from './search/search.component';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent, pathMatch:'full'},
  {path:'register',component:RegisterComponent, pathMatch:"full"},
  {path:'app', component:ApplicationComponent, children:[
    {path:'',component:MainComponent,pathMatch:"full"},
    {path:'pretrazivanje',component:SearchMainComponent,children:[
      {path:'', component:SearchComponent, pathMatch:"full"},
      {path:'odabir-prodavnica',component:MarketSearchComponent,pathMatch:"full"}
    ]},
    {path:'podrska',component:SupportComponent,pathMatch:"full"},
    {path:'kategorije',component:CategoriesMainComponent, children:[
      {path:'',component:CategoriesSearchComponent,pathMatch:"full"},
      {path:'kategorija',component:CategoryComponent,pathMatch:"full"}
    ]},
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
