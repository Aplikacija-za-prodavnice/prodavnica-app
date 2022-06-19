import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {
        path:'',
        redirectTo:'proizvodi'
      },
      {
        path: 'proizvodi',
        loadChildren: () => import('./proizvodi/proizvodi.module').then( m => m.ProizvodiPageModule)
      },
      {
        path: 'proizvod/:id',
        loadChildren: () => import('./prikazi-proizvod/prikazi-proizvod.module').then( m => m.PrikaziProizvodPageModule)
      },
      {
        path: 'noviproizvod',
        loadChildren: () => import('./dodaj-proizvod/dodaj-proizvod.module').then( m => m.DodajProizvodPageModule)
      },
      {
        path: 'izmeni/:id',
        loadChildren: () => import('./izmeni-proizvod-main/izmeni-proizvod-main.module').then( m => m.IzmeniProizvodMainPageModule)
      },
      {
        path: 'prodavnice',
        loadChildren: () => import('./prodavnice-main/prodavnice-main.module').then( m => m.ProdavniceMainPageModule)
      },
      {
        path: 'prodavnica/:id',
        loadChildren: () => import('./prikazi-prodavnicu/prikazi-prodavnicu.module').then( m => m.PrikaziProdavnicuPageModule)
      },
      {
        path: 'izmeni-prodavnicu/:id',
        loadChildren: () => import('./izmeni-prodavnicu/izmeni-prodavnicu.module').then( m => m.IzmeniProdavnicuPageModule)
      },
      {
        path: 'dodaj-prodavnicu',
        loadChildren: () => import('./dodaj-prodavnicu/dodaj-prodavnicu.module').then( m => m.DodajProdavnicuPageModule)
      },
      {
        path: 'kategorije',
        loadChildren: () => import('./kategorije/kategorije.module').then( m => m.KategorijePageModule)
      },
      {
        path: 'personalizovane-kategorije',
        loadChildren: () => import('./personalizovane-kategorije/personalizovane-kategorije.module').then( m => m.PersonalizovaneKategorijePageModule)
      },
      {
        path: 'kategorija/:id',
        loadChildren: () => import('./prikazi-kategoriju/prikazi-kategoriju.module').then( m => m.PrikaziKategorijuPageModule)
      },
      {
        path: 'izmeni-kategoriju/:id',
        loadChildren: () => import('./izmeni-kategoriju/izmeni-kategoriju.module').then( m => m.IzmeniKategorijuPageModule)
      },
      {
        path: 'dodaj-kategoriju',
        loadChildren: () => import('./dodaj-kategoriju/dodaj-kategoriju.module').then( m => m.DodajKategorijuPageModule)
      },
      {
        path: 'personalizovana-kategorija/:id',
        loadChildren: () => import('./prikazi-personalizovanu-kategoriju/prikazi-personalizovanu-kategoriju.module').then( m => m.PrikaziPersonalizovanuKategorijuPageModule)
      },
      {
        path: 'izmeni-personalizovanu-kategoriju/:id',
        loadChildren: () => import('./izmeni-personalizovanu-kategoriju/izmeni-personalizovanu-kategoriju.module').then( m => m.IzmeniPersonalizovanuKategorijuPageModule)
      },
      {
        path: 'dodaj-personalizovanu-kategoriju',
        loadChildren: () => import('./dodaj-personalizovanukategoriju/dodaj-personalizovanukategoriju.module').then( m => m.DodajPersonalizovanukategorijuPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
