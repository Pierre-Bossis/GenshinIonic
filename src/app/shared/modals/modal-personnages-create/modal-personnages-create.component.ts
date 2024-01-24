import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Armes, ArmesList } from 'src/app/_models/arme';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { Produits } from 'src/app/_models/produits';
import { ArmesService } from 'src/app/_services/armes.service';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-modal-personnages-create',
  templateUrl: './modal-personnages-create.component.html',
  styleUrls: ['./modal-personnages-create.component.scss'],
})
export class ModalPersonnagesCreateComponent  implements OnInit {
personnagesFormGroup!:FormGroup
date:Date = new Date();
icone! : File
image! : File

//remplir les select one to many & many to many
armesListe:ArmesList[] = []
produitsListe : Produits[] = []
matAmeliorationPersonnagesListe: MateriauxAmeliorationPersonnages[] = []
LivresAptitudeListe: LivresAptitude[] = []
matsElevationPersonnages: MateriauxElevationPersonnages[] = []
matsAmelioPersosArmes: MateriauxAmeliorationPersonnagesEtArmes[] = []
  constructor(private formBuilder:FormBuilder,private modalCtrl:ModalController,private personnagesService:PersonnagesService,
    private produitsService:ProduitsService,private matAmeliorationService:MateriauxAmeliorationPersonnagesService,private armesService:ArmesService,private route:Router,
    private livresAptitudeService:LivresAptitudeService, private matsElevService:MateriauxElevationPersonnagesService,
    private matsAmelioService:MateriauxAmeliorationPersonnagesEtArmesService) { }

  ngOnInit(){
    this.armesService.getAll().subscribe((data) => this.armesListe = data)
    this.produitsService.getAll().subscribe((data) => this.produitsListe = data)
    this.matAmeliorationService.getAll().subscribe((data) => this.matAmeliorationPersonnagesListe = data)
    this.livresAptitudeService.getAll().subscribe((data) => this.LivresAptitudeListe = data)
    this.matsElevService.getAll().subscribe((data) => this.matsElevationPersonnages = data)
    this.matsAmelioService.getAll().subscribe((data) => this.matsAmelioPersosArmes = data)

    this.personnagesFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required,Validators.minLength(2)]],
      oeilDivin: ['', Validators.required],
      typeArme: ['',Validators.required],
      lore: ['', Validators.required],
      nationalite: ['', Validators.required],
      trailerYT: ['', Validators.required],
      dateSortie: ['', Validators.required],
      armeId: [''],
      materiauxAmeliorationPersonnageId: ['', Validators.required],
      produitId: ['', Validators.required],
      rarete: ['', Validators.required],
      selectedLivres: ['',Validators.required],
      selectedMatsElevation: ['',Validators.required],
      selectedMatsAmelioPersosArmes: ['',Validators.required]
    })
  }

  loadIconeFile(e: any) {
    this.icone = e.target.files[0]
  }

  loadImageFile(e:any){
    this.image = e.target.files[0]
  }

  onSubmit() {    
    if(this.icone)    
      this.personnagesService.create(this.personnagesFormGroup.value,this.icone,this.image)
 }

  onCancel(){
    this.modalCtrl.dismiss()
  }
}
