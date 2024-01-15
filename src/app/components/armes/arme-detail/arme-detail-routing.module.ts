import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmeDetailPage } from './arme-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ArmeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmeDetailPageRoutingModule {}
