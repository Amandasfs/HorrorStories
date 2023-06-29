import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch: 'full' ,redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'login', pathMatch:'full', redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register', pathMatch:'full', redirectTo: 'register'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)

  },
  {
    path:'contactUs', pathMatch:'full', redirectTo: 'contactUs'
  },
  {
    path: 'contactUs',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path:'write', pathMatch:'full', redirectTo: 'write'
  },
  {
    path: 'write',
    loadChildren: () => import('./write/write.module').then(m => m.WriteModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
