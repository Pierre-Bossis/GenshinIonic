import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-materiaux-amelioration-personnages',
  templateUrl: './materiaux-amelioration-personnages.page.html',
  styleUrls: ['./materiaux-amelioration-personnages.page.scss'],
})
export class MateriauxAmeliorationPersonnagesPage implements OnInit {
materiaux:MateriauxAmeliorationPersonnages[] = []
spinner:boolean = true
  constructor(private materiauxService:MateriauxAmeliorationPersonnagesService, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.loadingData()
  }

  openModal(materiau: MateriauxAmeliorationPersonnages) {
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
