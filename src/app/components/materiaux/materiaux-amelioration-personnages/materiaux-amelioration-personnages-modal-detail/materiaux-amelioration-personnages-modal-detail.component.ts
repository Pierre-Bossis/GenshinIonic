import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';

@Component({
  selector: 'app-materiaux-amelioration-personnages-modal-detail',
  templateUrl: './materiaux-amelioration-personnages-modal-detail.component.html',
  styleUrls: ['./materiaux-amelioration-personnages-modal-detail.component.scss'],
})
export class MateriauxAmeliorationPersonnagesModalDetailComponent {
  @Input() materiau!:MateriauxAmeliorationPersonnages
  constructor(private modalCtrl:ModalController) { }
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }
}
