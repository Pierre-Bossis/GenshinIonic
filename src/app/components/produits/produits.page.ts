import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonItemSliding, ItemSlidingCustomEvent, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Produits } from 'src/app/_models/produits';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { ProduitsService } from 'src/app/_services/produits.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalResourcesCreateComponent } from 'src/app/shared/modals/modal-resources-create/modal-resources-create.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit, OnDestroy {
  connectedUser: ConnectedUser | undefined
  connectedUserSubscription!: Subscription
  updateSubscription!: Subscription
  constructor(private produitsService: ProduitsService, private modalCtrl: ModalController, private loadingCtrl: LoadingController,
    private authService: AuthService) { }
  produits: Produits[] = []
  spinner: boolean = true
  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });

    this.loadingData()

    this.updateSubscription = this.produitsService.listeProduitsUpdated$().subscribe(() => {
      this.loadingData()
    });
  }



  openModal(produit: Produits) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau: produit }
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
    this.produitsService.getAll().subscribe((data) => {
      this.produits = data
      this.spinner = false
    });
  }

  sliding(slidingProduits:IonItemSliding){
    slidingProduits.close()
  }

  ngOnDestroy(): void {
    if (this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
    if (this.updateSubscription)
      this.updateSubscription.unsubscribe()
  }
}
