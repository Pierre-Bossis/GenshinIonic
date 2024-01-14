import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'armes',
    loadChildren: () => import('./components/armes/armes.module').then( m => m.ArmesPageModule)
  },
  {
    path: 'personnages',
    loadChildren: () => import('./components/personnages/personnages.module').then( m => m.PersonnagesPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./components/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'materiaux-elevation-armes',
    loadChildren: () => import('./components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes.module').then( m => m.MateriauxElevationArmesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
