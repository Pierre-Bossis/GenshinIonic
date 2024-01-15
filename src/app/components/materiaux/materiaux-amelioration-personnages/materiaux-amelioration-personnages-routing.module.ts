import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriauxAmeliorationPersonnagesPage } from './materiaux-amelioration-personnages.page';

const routes: Routes = [
  {
    path: '',
    component: MateriauxAmeliorationPersonnagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriauxAmeliorationPersonnagesPageRoutingModule {}
