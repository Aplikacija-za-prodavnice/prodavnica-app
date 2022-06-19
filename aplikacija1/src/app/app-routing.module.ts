import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule),
    canLoad:[AuthGuardGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-main/admin-main.module').then( m => m.AdminMainPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
