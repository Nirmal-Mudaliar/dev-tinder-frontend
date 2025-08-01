import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule),
    title: 'Dev Tinder'
  }
];
