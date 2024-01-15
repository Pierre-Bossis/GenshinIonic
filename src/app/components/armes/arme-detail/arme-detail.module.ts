import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmeDetailPageRoutingModule } from './arme-detail-routing.module';

import { ArmeDetailPage } from './arme-detail.page';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ArmeDetailPageRoutingModule
  ],
  declarations: [ArmeDetailPage]
})
export class ArmeDetailPageModule {}
