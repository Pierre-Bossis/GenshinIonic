import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-livres-aptitude',
  templateUrl: './livres-aptitude.page.html',
  styleUrls: ['./livres-aptitude.page.scss'],
})
export class LivresAptitudePage implements OnInit {
  livres: LivresAptitude[] = []
  spinner: boolean = true

  constructor(private livresAptitudeService: LivresAptitudeService, private modalCtrl: ModalController) { }
  ngOnInit() {
    this.loadingData()
  }



  openModal(livre: LivresAptitude) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau : livre }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData() {
    this.livresAptitudeService.getAll().subscribe((data) => {
      this.livres = data
      this.spinner = false
    });
  }

}
