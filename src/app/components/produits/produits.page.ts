import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Produits } from 'src/app/_models/produits';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { ProduitsService } from 'src/app/_services/produits.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit, OnDestroy {
connectedUser:ConnectedUser | undefined
connectedUserSubscription!:Subscription
  constructor(private produitsService: ProduitsService, private modalCtrl: ModalController, private loadingCtrl: LoadingController,
              private authService:AuthService) { }
  produits: Produits[] = []
  spinner: boolean = true
  ngOnInit() {
    this.loadingData()
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }



  openModal(produit: Produits) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau : produit }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData() {
    this.produitsService.getAll().subscribe((data) => {
      this.produits = data
      this.spinner = false
    });
  }

  ngOnDestroy(): void {
    if(this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
  }
}
