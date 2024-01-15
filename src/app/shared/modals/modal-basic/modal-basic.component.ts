import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.scss'],
})
export class ModalBasicComponent{
  @Input() materiau!:any
  constructor(private modalCtrl:ModalController) { }
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }
}
