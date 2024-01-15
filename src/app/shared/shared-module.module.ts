import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from './pipes/star.pipe';
import { ModalBasicComponent } from './modals/modal-basic/modal-basic.component';
import { IonicModule } from '@ionic/angular';
import { ModalConstellationsAptitudesComponent } from './modals/modal-constellations-aptitudes/modal-constellations-aptitudes.component';
import { ModalArtefactsComponent } from './modals/modal-artefacts/modal-artefacts.component';



@NgModule({
  declarations: [StarPipe,ModalBasicComponent,ModalConstellationsAptitudesComponent,ModalArtefactsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StarPipe
  ]
})
export class SharedModule { }
