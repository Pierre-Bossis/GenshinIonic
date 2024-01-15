import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtefactsPage } from './artefacts.page';

const routes: Routes = [
  {
    path: '',
    component: ArtefactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtefactsPageRoutingModule {}
