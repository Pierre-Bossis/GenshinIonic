import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxAmeliorationPersonnagesPageRoutingModule } from './materiaux-amelioration-personnages-routing.module';

import { MateriauxAmeliorationPersonnagesPage } from './materiaux-amelioration-personnages.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MateriauxAmeliorationPersonnagesPageRoutingModule
  ],
  declarations: [MateriauxAmeliorationPersonnagesPage]
})
export class MateriauxAmeliorationPersonnagesPageModule {}
