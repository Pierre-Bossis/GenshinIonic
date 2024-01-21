import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from './pipes/star.pipe';
import { ModalBasicComponent } from './modals/modal-basic/modal-basic.component';
import { IonicModule } from '@ionic/angular';
import { ModalConstellationsAptitudesComponent } from './modals/modal-constellations-aptitudes/modal-constellations-aptitudes.component';
import { ModalArtefactsComponent } from './modals/modal-artefacts/modal-artefacts.component';
import { ModalResourcesCreateComponent } from './modals/modal-resources-create/modal-resources-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StarPipe,ModalBasicComponent,ModalConstellationsAptitudesComponent,ModalArtefactsComponent,ModalResourcesCreateComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    StarPipe
  ]
})
export class SharedModule { }
