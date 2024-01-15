import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnageDetailPageRoutingModule } from './personnage-detail-routing.module';

import { PersonnageDetailPage } from './personnage-detail.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PersonnageDetailPageRoutingModule
  ],
  declarations: [PersonnageDetailPage]
})
export class PersonnageDetailPageModule {}
