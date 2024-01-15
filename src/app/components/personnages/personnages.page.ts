import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, SegmentCustomEvent } from '@ionic/angular';
import { Personnages } from 'src/app/_models/personnages';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.page.html',
  styleUrls: ['./personnages.page.scss'],
})
export class PersonnagesPage implements OnInit {
personnages:Personnages[] = []
personnagesFiltered:Personnages[] = []

  constructor(private personnagesService:PersonnagesService,private  loadingCtrl:LoadingController, private router:Router) { }
  ngOnInit() {
    this.loadingData()
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
}
