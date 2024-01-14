import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';
import { ProduitsModalDetailComponent } from './produits-modal-detail/produits-modal-detail.component';
import { StarPipe } from 'src/app/shared/pipes/star.pipe';
import { ApplicationPipesModuleModule } from 'src/app/shared/pipes/application-pipes-module/application-pipes-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsPageRoutingModule,
    ApplicationPipesModuleModule
  ],
  declarations: [ProduitsPage,ProduitsModalDetailComponent],
  providers: []
})
export class ProduitsPageModule {}
