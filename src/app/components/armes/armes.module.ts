import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmesPageRoutingModule } from './armes-routing.module';

import { ArmesPage } from './armes.page';
import { StarPipe } from 'src/app/shared/pipes/star.pipe';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmesPageRoutingModule,
    ApplicationPipesModuleModule
  ],
  declarations: [ArmesPage],
  providers: []
})
export class ArmesPageModule {}
