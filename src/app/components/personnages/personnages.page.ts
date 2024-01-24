import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, SegmentCustomEvent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Personnages, PersonnagesList } from 'src/app/_models/personnages';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ModalPersonnagesCreateComponent } from 'src/app/shared/modals/modal-personnages-create/modal-personnages-create.component';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.page.html',
  styleUrls: ['./personnages.page.scss'],
})
export class PersonnagesPage implements OnInit, OnDestroy {
personnages:PersonnagesList[] = []
personnagesFiltered:PersonnagesList[] = []
connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription
updateSubscription!:Subscription

  constructor(private personnagesService:PersonnagesService,private modalCtrl:ModalController,private  loadingCtrl:LoadingController, private router:Router, private authService:AuthService) { }
  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
    })

    this.loadingData()
    
    this.updateSubscription = this.personnagesService.listePersonnagesUpdated$().subscribe(() => {
      this.loadingData()
    })
  }

  segmentChanged(element:SegmentCustomEvent){
    if(element.detail.value == 'All') 
    this.personnagesFiltered = this.personnages
  else
    this.personnagesFiltered = this.personnages.filter(perso => perso.oeilDivin == element.detail.value)
  }

  private loadingData() {
    const loading =  this.loadingCtrl.create({
      message: 'Chargement en cours...',
    }).then(loadlingEl => {
      loadlingEl.present()
      this.personnagesService.getAll().subscribe((data) => {
        this.personnages = data
        this.personnagesFiltered = this.personnages
        loadlingEl.dismiss()
      });
    })
  }

  onDetail(nom:string){    
    this.router.navigateByUrl('personnages/detail/' + nom);
  }

  openModalCreate(){
    this.modalCtrl.create({
      component: ModalPersonnagesCreateComponent
    }).then(modalEl => {
      modalEl.present()
    })
  }

  logout(){
    this.authService.logout()
  }
  ngOnDestroy() {
    if (this.connectedUserSubscription) {
      this.connectedUserSubscription.unsubscribe();
    }
  }
}
