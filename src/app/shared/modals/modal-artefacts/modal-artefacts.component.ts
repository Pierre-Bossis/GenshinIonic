import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Artefacts } from 'src/app/_models/artefacts';
import { ArtefactsService } from 'src/app/_services/artefacts.service';

@Component({
  selector: 'app-modal-artefacts',
  templateUrl: './modal-artefacts.component.html',
  styleUrls: ['./modal-artefacts.component.scss'],
})
export class ModalArtefactsComponent  implements OnInit {
@Input() nomSet!:string
artefacts:Artefacts[] = []
spinner:boolean = true
  constructor(private modalCtrl:ModalController, private artefactsService:ArtefactsService) { }

  ngOnInit() {
    this.loadingData()
  }

  onCancel(){
    this.modalCtrl.dismiss()
  }

  loadingData(){
    this.artefactsService.getBySet(this.nomSet).subscribe((data) => {
      this.artefacts = data
      this.spinner = false
    })
  }
}
