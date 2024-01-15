import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriauxAmeliorationPersonnagesPageRoutingModule } from './materiaux-amelioration-personnages-routing.module';

import { MateriauxAmeliorationPersonnagesPage } from './materiaux-amelioration-personnages.page';
import { MateriauxAmeliorationPersonnagesModalDetailComponent } from './materiaux-amelioration-personnages-modal-detail/materiaux-amelioration-personnages-modal-detail.component';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPipesModuleModule,
    MateriauxAmeliorationPersonnagesPageRoutingModule
  ],
  declarations: [MateriauxAmeliorationPersonnagesPage,MateriauxAmeliorationPersonnagesModalDetailComponent]
})
export class MateriauxAmeliorationPersonnagesPageModule {}
