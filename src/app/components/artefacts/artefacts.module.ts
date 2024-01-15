import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtefactsPageRoutingModule } from './artefacts-routing.module';

import { ArtefactsPage } from './artefacts.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ArtefactsPageRoutingModule
  ],
  declarations: [ArtefactsPage]
})
export class ArtefactsPageModule {}
