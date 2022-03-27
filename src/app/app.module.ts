import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent , routingComponents, SelectMarketsComponent, SelectProductsComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
