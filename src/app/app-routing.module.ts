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
  {
    path: 'materiaux-amelioration-personnages',
    loadChildren: () => import('./components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages.module').then( m => m.MateriauxAmeliorationPersonnagesPageModule)
  },
  {
    path: 'materiaux-elevation-personnages',
    loadChildren: () => import('./components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages.module').then( m => m.MateriauxElevationPersonnagesPageModule)
  },
  {
    path: 'livres-aptitude',
    loadChildren: () => import('./components/livres-aptitude/livres-aptitude.module').then( m => m.LivresAptitudePageModule)
  },
  {
    path: 'materiaux-amelioration-personnages-et-armes',
    loadChildren: () => import('./components/materiaux/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes.module').then( m => m.MateriauxAmeliorationPersonnagesEtArmesPageModule)
  },
  {
    path: 'artefacts',
    loadChildren: () => import('./components/artefacts/artefacts.module').then( m => m.ArtefactsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
