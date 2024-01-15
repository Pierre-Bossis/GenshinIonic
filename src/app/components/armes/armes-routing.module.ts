import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmesPage } from './armes.page';

const routes: Routes = [
  {
    path: '',
    component: ArmesPage
  },
  {
    path: 'detail/:nom',
    loadChildren: () => import('./arme-detail/arme-detail.module').then( m => m.ArmeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmesPageRoutingModule {}
