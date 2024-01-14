import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';
import { ProduitsModalDetailComponent } from './produits-modal-detail/produits-modal-detail.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor(private produitsService:ProduitsService,private modalCtrl:ModalController) { }
produits:Produits[] = []
  ngOnInit() {
    this.produitsService.getAll().subscribe((data) => this.produits = data)
  }

  openModal(produit:Produits){
    this.modalCtrl.create({
      component: ProduitsModalDetailComponent,
      componentProps: { produit: produit }
    }).then(modalEl => {
      modalEl.present()
    })
  }
}
