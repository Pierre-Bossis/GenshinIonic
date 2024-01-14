import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriauxElevationArmesPage } from './materiaux-elevation-armes.page';

const routes: Routes = [
  {
    path: '',
    component: MateriauxElevationArmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriauxElevationArmesPageRoutingModule {}
