import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produits } from 'src/app/_models/produits';

@Component({
  selector: 'app-produits-modal-detail',
  templateUrl: './produits-modal-detail.component.html',
  styleUrls: ['./produits-modal-detail.component.scss'],
})
export class ProduitsModalDetailComponent {
  @Input() produit!:Produits
  constructor(private modalCtrl:ModalController) { }



  onCancel(){
    this.modalCtrl.dismiss(null,'cancel')
  }
}
