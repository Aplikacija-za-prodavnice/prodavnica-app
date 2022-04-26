import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SelectMarketsComponent } from './select-markets/select-markets.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { CompareProductsMainComponent } from './compare-products-main/compare-products-main.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AccountComponent } from './account/account.component';
import { AccountMainComponent } from './account-main/account-main.component';
import { MainComponent } from './main/main.component';
import { SwiperModule } from 'swiper/angular';
import { ShoppingCartService } from './servisi/shopping-cart/shopping-cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './servisi/account/account.service';
import { ProizvodiSearchService } from './servisi/proizvodi/proizvodi-search.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoriesSearchComponent } from './categories-search/categories-search.component';
import { CategorySearchService } from './servisi/category/category-search.service';
import { CategoryComponent } from './category/category.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { SupportComponent } from './support/support.component';
import { SearchComponent } from './search/search.component';
import { MarketSearchComponent } from './market-search/market-search.component';
import { SearchMainComponent } from './search-main/search-main.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent , routingComponents, SelectMarketsComponent, SelectProductsComponent, LoginComponent, RegisterComponent, ApplicationComponent, CompareProductsMainComponent, ShoppingCartComponent, AccountComponent, AccountMainComponent, MainComponent,ProductDetailsComponent, CategoriesSearchComponent, CategoryComponent, CategoriesMainComponent, SupportComponent, SearchComponent, MarketSearchComponent, SearchMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    SwiperModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [ShoppingCartService,AccountService,ProizvodiSearchService,CategorySearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
