import { Component, OnInit } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';
import { Armes } from 'src/app/_models/arme'; 
import { ArmesService } from 'src/app/_services/armes.service';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.page.html',
  styleUrls: ['./armes.page.scss'],
})
export class ArmesPage implements OnInit {
armes:Armes[] = []
armesFiltered:Armes[] = []
  constructor(private armesService:ArmesService) { }

  ngOnInit() {
    this.armesService.getAll().subscribe((data) => {
      this.armes = data
      this.armesFiltered = this.armes
    })
  }

  segmentChanged(typeArme:SegmentCustomEvent){
    if(typeArme.detail.value == 'All') 
    this.armesFiltered = this.armes
  else
    this.armesFiltered = this.armes.filter(arme => arme.typeArme == typeArme.detail.value)
  }
}
