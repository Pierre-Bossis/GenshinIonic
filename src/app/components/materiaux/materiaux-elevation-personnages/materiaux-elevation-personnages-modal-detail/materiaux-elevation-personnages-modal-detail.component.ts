import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';

@Component({
  selector: 'app-materiaux-elevation-personnages-modal-detail',
  templateUrl: './materiaux-elevation-personnages-modal-detail.component.html',
  styleUrls: ['./materiaux-elevation-personnages-modal-detail.component.scss'],
})
export class MateriauxElevationPersonnagesModalDetailComponent{
  @Input() materiau!:MateriauxElevationPersonnages
  constructor(private modalCtrl:ModalController) { }
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }
}
