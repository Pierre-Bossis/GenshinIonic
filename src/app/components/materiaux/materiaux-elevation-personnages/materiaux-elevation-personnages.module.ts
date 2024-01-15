import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxElevationPersonnagesPageRoutingModule } from './materiaux-elevation-personnages-routing.module';

import { MateriauxElevationPersonnagesPage } from './materiaux-elevation-personnages.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MateriauxElevationPersonnagesPageRoutingModule
  ],
  declarations: [MateriauxElevationPersonnagesPage]
})
export class MateriauxElevationPersonnagesPageModule {}
