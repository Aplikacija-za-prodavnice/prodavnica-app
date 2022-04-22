import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { CompareProductsMainComponent } from './compare-products-main/compare-products-main.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AccountComponent } from './account/account.component';
import { AccountMainComponent } from './account-main/account-main.component';
import { MainComponent } from './main/main.component';
import { SwiperModule } from 'swiper/angular';
import { NizService } from './serivsi/niz/niz.service';
import { ProductService } from './serivsi/proizvodi/product.service';
import { ShoppingCartService } from './serivsi/shopping-cart/shopping-cart.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent , routingComponents, SelectMarketsComponent, SelectProductsComponent, ProductDetailsComponent, LoginComponent, RegisterComponent, ApplicationComponent, CompareProductsMainComponent, ShoppingCartComponent, AccountComponent, AccountMainComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [NizService,ProductService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
