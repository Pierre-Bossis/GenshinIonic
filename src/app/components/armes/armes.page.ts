import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, SegmentCustomEvent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Armes } from 'src/app/_models/arme'; 
import { ConnectedUser } from 'src/app/_models/user';
import { ArmesService } from 'src/app/_services/armes.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.page.html',
  styleUrls: ['./armes.page.scss'],
})
export class ArmesPage implements OnInit, OnDestroy {
armes:Armes[] = []
armesFiltered:Armes[] = []
connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription
  constructor(private armesService:ArmesService, private loadingCtrl:LoadingController, private router:Router, private authService:AuthService) { }

  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
    });
  }

  onDetail(nom:string){
    this.router.navigateByUrl('armes/detail/'+nom)
  }

  segmentChanged(typeArme:SegmentCustomEvent){
    if(typeArme.detail.value == 'All') 
    this.armesFiltered = this.armes
  else
    this.armesFiltered = this.armes.filter(arme => arme.typeArme == typeArme.detail.value)
  }

  private loadingData() {
    const loading =  this.loadingCtrl.create({
      message: 'Chargement en cours...',
    }).then(loadlingEl => {
      loadlingEl.present()
      this.armesService.getAll().subscribe((data) => {
        this.armes = data
        this.armesFiltered = this.armes
        loadlingEl.dismiss()
      });
    })
  }

  ngOnDestroy() {
    // Désabonnement lors de la destruction du composant
    if (this.connectedUserSubscription) {
      this.connectedUserSubscription.unsubscribe();
    }
  }
}
