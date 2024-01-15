import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, SegmentCustomEvent } from '@ionic/angular';
import { Armes } from 'src/app/_models/arme';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { ArmesService } from 'src/app/_services/armes.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';

@Component({
  selector: 'app-arme-detail',
  templateUrl: './arme-detail.page.html',
  styleUrls: ['./arme-detail.page.scss'],
})
export class ArmeDetailPage implements OnInit {
armeName!:string
arme!:Armes
matsElevation:MateriauxElevationArmes[] = []
matsAmelioration:MateriauxAmeliorationPersonnagesEtArmes[] = []
spinner:boolean = true
selectedSegment: string = 'detail';
  constructor(private armesService:ArmesService,private activatedRoute:ActivatedRoute, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.armeName = params['nom'];
      if(this.armeName != null)
        this.loadingData(this.armeName)      
    });
  }

  openModal(materiau: any) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau : materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  segmentChanged(e:SegmentCustomEvent){
    if(e.detail.value != undefined){
      this.selectedSegment = e.detail.value.toString()
  }
  }

  private loadingData(nom:string) {
    this.armesService.getByName(nom).subscribe((data) => {
      this.arme = data.arme
      this.matsElevation = data.matsElevationArmes
      this.matsAmelioration = data.matsAmelioPersosArmes
      this.spinner = false      
    });
  }

}
