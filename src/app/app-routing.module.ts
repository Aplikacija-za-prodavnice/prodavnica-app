import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareProductsComponent } from './compare-products/compare-products.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'vise-o-proizvodu', component:DetailsComponent},
  {path:'uporedjivanje-proizvoda', component:CompareProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
 export const routingComponents = [DetailsComponent,CompareProductsComponent]
