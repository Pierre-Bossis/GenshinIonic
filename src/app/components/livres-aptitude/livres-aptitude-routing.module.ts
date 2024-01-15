import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivresAptitudePage } from './livres-aptitude.page';

const routes: Routes = [
  {
    path: '',
    component: LivresAptitudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivresAptitudePageRoutingModule {}
