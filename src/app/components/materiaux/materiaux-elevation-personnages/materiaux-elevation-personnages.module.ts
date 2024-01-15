import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxElevationPersonnagesPageRoutingModule } from './materiaux-elevation-personnages-routing.module';

import { MateriauxElevationPersonnagesPage } from './materiaux-elevation-personnages.page';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPipesModuleModule,
    MateriauxElevationPersonnagesPageRoutingModule
  ],
  declarations: [MateriauxElevationPersonnagesPage]
})
export class MateriauxElevationPersonnagesPageModule {}
