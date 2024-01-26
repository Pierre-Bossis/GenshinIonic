import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnageDetailPageRoutingModule } from './personnage-detail-routing.module';

import { PersonnageDetailPage } from './personnage-detail.page';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { ConstellationsCreateComponent } from './constellations-create/constellations-create.component';
import { AptitudesCreateComponent } from './aptitudes-create/aptitudes-create.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    PersonnageDetailPageRoutingModule
  ],
  declarations: [PersonnageDetailPage,ConstellationsCreateComponent,AptitudesCreateComponent]
})
export class PersonnageDetailPageModule {}
