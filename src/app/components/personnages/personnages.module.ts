import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnagesPageRoutingModule } from './personnages-routing.module';

import { PersonnagesPage } from './personnages.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PersonnagesPageRoutingModule
  ],
  declarations: [PersonnagesPage]
})
export class PersonnagesPageModule {}
