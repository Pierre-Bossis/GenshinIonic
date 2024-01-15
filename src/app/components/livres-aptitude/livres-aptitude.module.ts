import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivresAptitudePageRoutingModule } from './livres-aptitude-routing.module';

import { LivresAptitudePage } from './livres-aptitude.page';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPipesModuleModule,
    LivresAptitudePageRoutingModule
  ],
  declarations: [LivresAptitudePage]
})
export class LivresAptitudePageModule {}
