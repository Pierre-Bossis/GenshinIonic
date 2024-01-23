import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-modal-personnages-create',
  templateUrl: './modal-personnages-create.component.html',
  styleUrls: ['./modal-personnages-create.component.scss'],
})
export class ModalPersonnagesCreateComponent  implements OnInit {

  constructor(private modalCtrl:ModalController,private personnagesService:PersonnagesService) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss()
  }
}
