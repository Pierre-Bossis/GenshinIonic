import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtefactsPageRoutingModule } from './artefacts-routing.module';

import { ArtefactsPage } from './artefacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtefactsPageRoutingModule
  ],
  declarations: [ArtefactsPage]
})
export class ArtefactsPageModule {}
