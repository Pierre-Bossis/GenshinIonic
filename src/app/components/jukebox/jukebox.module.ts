import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JukeboxPageRoutingModule } from './jukebox-routing.module';

import { JukeboxPage } from './jukebox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JukeboxPageRoutingModule
  ],
  declarations: [JukeboxPage]
})
export class JukeboxPageModule {}
