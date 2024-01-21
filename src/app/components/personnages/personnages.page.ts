import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, SegmentCustomEvent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Personnages, PersonnagesList } from 'src/app/_models/personnages';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';

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

  constructor(private personnagesService:PersonnagesService,private  loadingCtrl:LoadingController, private router:Router, private authService:AuthService) { }
  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
    });    
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
        console.log(this.personnages);
        loadlingEl.dismiss()
      });
    })
  }

  onDetail(nom:string){    
    this.router.navigateByUrl('personnages/detail/' + nom);
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
