import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxElevationArmesPageRoutingModule } from './materiaux-elevation-armes-routing.module';

import { MateriauxElevationArmesPage } from './materiaux-elevation-armes.page';
import { MateriauxElevationArmesModalDetailComponent } from './materiaux-elevation-armes-modal-detail/materiaux-elevation-armes-modal-detail.component';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriauxElevationArmesPageRoutingModule,
    ApplicationPipesModuleModule
  ],
  declarations: [MateriauxElevationArmesPage, MateriauxElevationArmesModalDetailComponent]
})
export class MateriauxElevationArmesPageModule {}
