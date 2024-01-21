import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalResourcesCreateComponent } from 'src/app/shared/modals/modal-resources-create/modal-resources-create.component';

@Component({
  selector: 'app-materiaux-elevation-armes',
  templateUrl: './materiaux-elevation-armes.page.html',
  styleUrls: ['./materiaux-elevation-armes.page.scss'],
})
export class MateriauxElevationArmesPage implements OnInit, OnDestroy {
  materiaux: MateriauxElevationArmes[] = []
  spinner: boolean = true
  connectedUser!:ConnectedUser | undefined
  connectedUserSubscription!:Subscription
  constructor(private matsElevationArmesService: MateriauxElevationArmesService, private modalCtrl: ModalController,private authService:AuthService) { }

  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }

  openModal(materiau: MateriauxElevationArmes) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau: materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  openModalCreate(item:string){
    this.modalCtrl.create({
      component: ModalResourcesCreateComponent,
      componentProps: {item : item}
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

  ngOnDestroy(): void {
    if(this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
  }
}
