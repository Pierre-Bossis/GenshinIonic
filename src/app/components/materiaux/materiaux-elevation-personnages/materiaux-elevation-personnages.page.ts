import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalResourcesCreateComponent } from 'src/app/shared/modals/modal-resources-create/modal-resources-create.component';

@Component({
  selector: 'app-materiaux-elevation-personnages',
  templateUrl: './materiaux-elevation-personnages.page.html',
  styleUrls: ['./materiaux-elevation-personnages.page.scss'],
})
export class MateriauxElevationPersonnagesPage implements OnInit {
materiaux:MateriauxElevationPersonnages[] = []
spinner:boolean = true
connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription
  constructor(private materiauxService:MateriauxElevationPersonnagesService, private modalCtrl:ModalController,private authService:AuthService) { }

  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }

  openModal(materiau: MateriauxElevationPersonnages) {
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
    this.materiauxService.getAll().subscribe((data) => {
      this.materiaux = data
      this.spinner = false
    });
  }

  ngOnDestroy(): void {
    if(this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
  }
}
