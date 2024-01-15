import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';
import { MateriauxElevationArmesModalDetailComponent } from './materiaux-elevation-armes-modal-detail/materiaux-elevation-armes-modal-detail.component';

@Component({
  selector: 'app-materiaux-elevation-armes',
  templateUrl: './materiaux-elevation-armes.page.html',
  styleUrls: ['./materiaux-elevation-armes.page.scss'],
})
export class MateriauxElevationArmesPage implements OnInit {
  materiaux: MateriauxElevationArmes[] = []
  spinner: boolean = true
  constructor(private matsElevationArmesService: MateriauxElevationArmesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadingData()
  }

  openModal(materiau: MateriauxElevationArmes) {
    this.modalCtrl.create({
      component: MateriauxElevationArmesModalDetailComponent,
      componentProps: { materiau: materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData() {
    this.matsElevationArmesService.getAll().subscribe((data) => {
      this.materiaux = data
      this.spinner = false
    });
  }
}
