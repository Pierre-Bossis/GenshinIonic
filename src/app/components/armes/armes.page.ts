import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, SegmentCustomEvent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Armes, ArmesList } from 'src/app/_models/arme';
import { ConnectedUser } from 'src/app/_models/user';
import { ArmesService } from 'src/app/_services/armes.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ModalArmesCreateComponent } from 'src/app/shared/modals/modal-armes-create/modal-armes-create.component';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.page.html',
  styleUrls: ['./armes.page.scss'],
})
export class ArmesPage implements OnInit, OnDestroy {
  armes: ArmesList[] = []
  armesFiltered: ArmesList[] = []
  connectedUser!: ConnectedUser | undefined
  connectedUserSubscription!: Subscription
  updateSubscription!: Subscription
  constructor(private armesService: ArmesService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
    })

    this.loadingData()

    this.updateSubscription = this.armesService.listeArmesUpdated$().subscribe(() => {
      this.loadingData()
    })
  }

  onDetail(nom: string) {
    this.router.navigateByUrl('armes/detail/' + nom)
  }

  segmentChanged(typeArme: SegmentCustomEvent) {
    if (typeArme.detail.value == 'All')
      this.armesFiltered = this.armes
    else
      this.armesFiltered = this.armes.filter(arme => arme.typeArme == typeArme.detail.value)
  }

  private loadingData() {
    const loading = this.loadingCtrl.create({
      message: 'Chargement en cours...',
    }).then(loadlingEl => {
      loadlingEl.present()
      this.armesService.getAll().subscribe((data) => {
        this.armes = data
        this.armesFiltered = this.armes
        console.log(data);
        
        loadlingEl.dismiss()
      });
    })
  }

  openModalCreate() {
    this.modalCtrl.create({
      component: ModalArmesCreateComponent
    }).then(modalEl => {
      modalEl.present()
    })
  }

  ngOnDestroy() {
    if (this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
    if (this.updateSubscription)
      this.updateSubscription.unsubscribe();
  }
}
