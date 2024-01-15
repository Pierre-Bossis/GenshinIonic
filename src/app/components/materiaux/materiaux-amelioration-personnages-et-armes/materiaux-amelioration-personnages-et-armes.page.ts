import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-materiaux-amelioration-personnages-et-armes',
  templateUrl: './materiaux-amelioration-personnages-et-armes.page.html',
  styleUrls: ['./materiaux-amelioration-personnages-et-armes.page.scss'],
})
export class MateriauxAmeliorationPersonnagesEtArmesPage implements OnInit {
  materiaux:MateriauxAmeliorationPersonnagesEtArmes[] = []
  spinner:boolean = true
    constructor(private materiauxService:MateriauxAmeliorationPersonnagesEtArmesService, private modalCtrl:ModalController) { }
  
    ngOnInit() {
      this.loadingData()
    }
  
    openModal(materiau: MateriauxAmeliorationPersonnagesEtArmes) {
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
