import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Artefacts } from 'src/app/_models/artefacts';
import { ConnectedUser } from 'src/app/_models/user';
import { ArtefactsService } from 'src/app/_services/artefacts.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ModalArtefactsCreateComponent } from 'src/app/shared/modals/modal-artefacts-create/modal-artefacts-create.component';
import { ModalArtefactsComponent } from 'src/app/shared/modals/modal-artefacts/modal-artefacts.component';

@Component({
  selector: 'app-artefacts',
  templateUrl: './artefacts.page.html',
  styleUrls: ['./artefacts.page.scss'],
})
export class ArtefactsPage implements OnInit, OnDestroy {
artefacts:Artefacts[] = []
spinner:boolean=true
connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription
updateSubscription!: Subscription
  constructor(private artefactsService:ArtefactsService,private authService:AuthService,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    })

    this.loadingData()

    this.updateSubscription = this.artefactsService.listeArtefactsUpdated$().subscribe(() => {
      this.loadingData()
    });
  }

  openModal(nomSet:string){
    this.modalCtrl.create({
      component: ModalArtefactsComponent,
      componentProps: { nomSet:nomSet }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  openModalCreate(){
    this.modalCtrl.create({
      component: ModalArtefactsCreateComponent
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

  ngOnDestroy(): void {
    if(this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
      if (this.updateSubscription)
      this.updateSubscription.unsubscribe()
  }
}
