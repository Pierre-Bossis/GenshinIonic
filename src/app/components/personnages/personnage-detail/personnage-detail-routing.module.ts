import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnageDetailPage } from './personnage-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnageDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnageDetailPageRoutingModule {}
