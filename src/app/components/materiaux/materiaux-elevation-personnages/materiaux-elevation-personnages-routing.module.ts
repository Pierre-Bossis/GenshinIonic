import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriauxElevationPersonnagesPage } from './materiaux-elevation-personnages.page';

const routes: Routes = [
  {
    path: '',
    component: MateriauxElevationPersonnagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriauxElevationPersonnagesPageRoutingModule {}
