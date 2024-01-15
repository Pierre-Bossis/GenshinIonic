import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivresAptitudePageRoutingModule } from './livres-aptitude-routing.module';

import { LivresAptitudePage } from './livres-aptitude.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LivresAptitudePageRoutingModule
  ],
  declarations: [LivresAptitudePage]
})
export class LivresAptitudePageModule {}
