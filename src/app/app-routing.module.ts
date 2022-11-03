import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'faq', loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
