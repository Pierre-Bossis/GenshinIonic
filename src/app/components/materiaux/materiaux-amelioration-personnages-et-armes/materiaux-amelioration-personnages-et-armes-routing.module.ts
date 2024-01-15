import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriauxAmeliorationPersonnagesEtArmesPage } from './materiaux-amelioration-personnages-et-armes.page';

const routes: Routes = [
  {
    path: '',
    component: MateriauxAmeliorationPersonnagesEtArmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriauxAmeliorationPersonnagesEtArmesPageRoutingModule {}
