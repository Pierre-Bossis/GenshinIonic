import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalResourcesCreateComponent } from 'src/app/shared/modals/modal-resources-create/modal-resources-create.component';

@Component({
  selector: 'app-materiaux-amelioration-personnages-et-armes',
  templateUrl: './materiaux-amelioration-personnages-et-armes.page.html',
  styleUrls: ['./materiaux-amelioration-personnages-et-armes.page.scss'],
})
export class MateriauxAmeliorationPersonnagesEtArmesPage implements OnInit, OnDestroy {
  materiaux: MateriauxAmeliorationPersonnagesEtArmes[] = []
  spinner: boolean = true
  connectedUser!: ConnectedUser | undefined
  connectedUserSubscription!: Subscription
  updateSubscription!: Subscription

  constructor(private materiauxService: MateriauxAmeliorationPersonnagesEtArmesService, private modalCtrl: ModalController,
    private authService: AuthService) { }

  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });

    this.loadingData()

    this.updateSubscription = this.materiauxService.listeMateriauxUpdated$().subscribe(() => {
      this.loadingData()
    });
  }

  openModal(materiau: MateriauxAmeliorationPersonnagesEtArmes) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau: materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  openModalCreate(item: string) {
    this.modalCtrl.create({
      component: ModalResourcesCreateComponent,
      componentProps: { item: item }
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


  ngOnDestroy(): void {
    if (this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
    if (this.updateSubscription)
      this.updateSubscription.unsubscribe()
  }
}
