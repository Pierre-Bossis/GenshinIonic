import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxAmeliorationPersonnagesEtArmesPageRoutingModule } from './materiaux-amelioration-personnages-et-armes-routing.module';

import { MateriauxAmeliorationPersonnagesEtArmesPage } from './materiaux-amelioration-personnages-et-armes.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MateriauxAmeliorationPersonnagesEtArmesPageRoutingModule
  ],
  declarations: [MateriauxAmeliorationPersonnagesEtArmesPage]
})
export class MateriauxAmeliorationPersonnagesEtArmesPageModule {}
