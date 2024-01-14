import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnagesPageRoutingModule } from './personnages-routing.module';

import { PersonnagesPage } from './personnages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnagesPageRoutingModule
  ],
  declarations: [PersonnagesPage]
})
export class PersonnagesPageModule {}
