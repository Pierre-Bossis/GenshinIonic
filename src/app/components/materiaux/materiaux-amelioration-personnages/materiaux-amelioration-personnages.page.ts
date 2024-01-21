import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalResourcesCreateComponent } from 'src/app/shared/modals/modal-resources-create/modal-resources-create.component';

@Component({
  selector: 'app-materiaux-amelioration-personnages',
  templateUrl: './materiaux-amelioration-personnages.page.html',
  styleUrls: ['./materiaux-amelioration-personnages.page.scss'],
})
export class MateriauxAmeliorationPersonnagesPage implements OnInit, OnDestroy {
materiaux:MateriauxAmeliorationPersonnages[] = []
spinner:boolean = true
connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription
  constructor(private materiauxService:MateriauxAmeliorationPersonnagesService, private modalCtrl:ModalController,private authService:AuthService) { }

  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }

  openModal(materiau: MateriauxAmeliorationPersonnages) {
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
