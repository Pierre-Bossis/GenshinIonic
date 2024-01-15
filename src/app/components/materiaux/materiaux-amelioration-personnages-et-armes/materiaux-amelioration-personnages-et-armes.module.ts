import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxAmeliorationPersonnagesEtArmesPageRoutingModule } from './materiaux-amelioration-personnages-et-armes-routing.module';

import { MateriauxAmeliorationPersonnagesEtArmesPage } from './materiaux-amelioration-personnages-et-armes.page';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPipesModuleModule,
    MateriauxAmeliorationPersonnagesEtArmesPageRoutingModule
  ],
  declarations: [MateriauxAmeliorationPersonnagesEtArmesPage]
})
export class MateriauxAmeliorationPersonnagesEtArmesPageModule {}
