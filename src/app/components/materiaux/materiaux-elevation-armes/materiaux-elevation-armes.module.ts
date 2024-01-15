import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxElevationArmesPageRoutingModule } from './materiaux-elevation-armes-routing.module';

import { MateriauxElevationArmesPage } from './materiaux-elevation-armes.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriauxElevationArmesPageRoutingModule,
    SharedModule
  ],
  declarations: [MateriauxElevationArmesPage]
})
export class MateriauxElevationArmesPageModule {}
