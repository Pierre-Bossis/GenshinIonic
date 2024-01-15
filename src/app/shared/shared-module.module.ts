import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from './pipes/star.pipe';
import { ModalBasicComponent } from './modals/modal-basic/modal-basic.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [StarPipe,ModalBasicComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StarPipe
  ]
})
export class SharedModule { }
