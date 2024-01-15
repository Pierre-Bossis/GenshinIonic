import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Artefacts } from 'src/app/_models/artefacts';
import { ArtefactsService } from 'src/app/_services/artefacts.service';
import { ModalArtefactsComponent } from 'src/app/shared/modals/modal-artefacts/modal-artefacts.component';

@Component({
  selector: 'app-artefacts',
  templateUrl: './artefacts.page.html',
  styleUrls: ['./artefacts.page.scss'],
})
export class ArtefactsPage implements OnInit {
artefacts:Artefacts[] = []
spinner:boolean=true
  constructor(private artefactsService:ArtefactsService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadingData()
  }

  openModal(nomSet:string){
    this.modalCtrl.create({
      component: ModalArtefactsComponent,
      componentProps: { nomSet:nomSet }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData() {
    this.artefactsService.getAll().subscribe((data) => {
      this.artefacts = data
      this.spinner = false
    });
  }
}
