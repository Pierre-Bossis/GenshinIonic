import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';
import { ProduitsModalDetailComponent } from './produits-modal-detail/produits-modal-detail.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor(private produitsService: ProduitsService, private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }
  produits: Produits[] = []
  spinner: boolean = true
  ngOnInit() {
    this.loadingData()
  }



  openModal(produit: Produits) {
    this.modalCtrl.create({
      component: ProduitsModalDetailComponent,
      componentProps: { produit: produit }
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
}
