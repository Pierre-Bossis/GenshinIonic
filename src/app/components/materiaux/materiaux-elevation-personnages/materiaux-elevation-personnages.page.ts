import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-materiaux-elevation-personnages',
  templateUrl: './materiaux-elevation-personnages.page.html',
  styleUrls: ['./materiaux-elevation-personnages.page.scss'],
})
export class MateriauxElevationPersonnagesPage implements OnInit {
materiaux:MateriauxElevationPersonnages[] = []
spinner:boolean = true
  constructor(private materiauxService:MateriauxElevationPersonnagesService, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadingData()
  }

  openModal(materiau: MateriauxElevationPersonnages) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau: materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData() {
    this.materiauxService.getAll().subscribe((data) => {
      this.materiaux = data
      this.spinner = false
    });
  }
}
