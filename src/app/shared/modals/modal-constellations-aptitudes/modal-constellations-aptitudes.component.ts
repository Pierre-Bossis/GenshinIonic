import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-constellations-aptitudes',
  templateUrl: './modal-constellations-aptitudes.component.html',
  styleUrls: ['./modal-constellations-aptitudes.component.scss'],
})
export class ModalConstellationsAptitudesComponent{
  @Input() item!:any
  constructor(private modalCtrl:ModalController) { }
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }

}
