import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarPipe } from '../star.pipe';



@NgModule({
  declarations: [StarPipe],
  imports: [
    CommonModule
  ],
  exports: [
    StarPipe
  ]
})
export class ApplicationPipesModuleModule { }
