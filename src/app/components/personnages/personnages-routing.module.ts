import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnagesPage } from './personnages.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnagesPage
  },
  {
    path: 'detail/:nom',
    loadChildren: () => import('./personnage-detail/personnage-detail.module').then( m => m.PersonnageDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnagesPageRoutingModule {}
