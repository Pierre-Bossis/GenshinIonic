import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JukeboxPage } from './jukebox.page';

const routes: Routes = [
  {
    path: '',
    component: JukeboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JukeboxPageRoutingModule {}
