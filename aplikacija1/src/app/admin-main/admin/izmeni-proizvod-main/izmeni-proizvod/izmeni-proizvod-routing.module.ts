import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniProizvodPage } from './izmeni-proizvod.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniProizvodPage,
    // children:[
    //   {
    //     path: 'prodavnice',
    //     loadChildren: () => import('./izmeni-prodavnice/izmeni-prodavnice.module').then( m => m.IzmeniProdavnicePageModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniProizvodPageRoutingModule {}
