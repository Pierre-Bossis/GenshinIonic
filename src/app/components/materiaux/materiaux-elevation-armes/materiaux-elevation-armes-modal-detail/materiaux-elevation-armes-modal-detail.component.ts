import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';

@Component({
  selector: 'app-materiaux-elevation-armes-modal-detail',
  templateUrl: './materiaux-elevation-armes-modal-detail.component.html',
  styleUrls: ['./materiaux-elevation-armes-modal-detail.component.scss'],
})
export class MateriauxElevationArmesModalDetailComponent{
@Input() materiau!:MateriauxElevationArmes
  constructor(private modalCtrl:ModalController) { }
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }
}
