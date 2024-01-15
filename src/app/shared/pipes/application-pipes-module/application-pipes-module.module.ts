import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from '../star.pipe';
import { ModalBasicComponent } from '../../modals/modal-basic/modal-basic.component';
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
export class ApplicationPipesModuleModule { }
