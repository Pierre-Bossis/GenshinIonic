import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationArmes } from 'src/app/_models/materiaux-elevation-armes';
import { ArmesService } from 'src/app/_services/armes.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';

@Component({
  selector: 'app-modal-armes-create',
  templateUrl: './modal-armes-create.component.html',
  styleUrls: ['./modal-armes-create.component.scss'],
})
export class ModalArmesCreateComponent  implements OnInit {
  icone!:File
  image!:File
  matListe: MateriauxElevationArmes[] = []
  matAmelioListe: MateriauxAmeliorationPersonnagesEtArmes[] = []
  createArmesFormGroup!:FormGroup
    constructor(private formBuilder:FormBuilder,private armesService:ArmesService,private modalCtrl:ModalController,
                private materiauxElevService:MateriauxElevationArmesService,private matsAmelioPersosArmesService:MateriauxAmeliorationPersonnagesEtArmesService) { }
  
    ngOnInit(){
      this.materiauxElevService.getAll().subscribe((data) => this.matListe = data)
      this.matsAmelioPersosArmesService.getAll().subscribe((data) => this.matAmelioListe = data)

      this.createArmesFormGroup = this.formBuilder.group({
        nom: ['', [Validators.required,Validators.minLength(2)]],
        typeArme: ['', Validators.required],
        description: ['', Validators.required],
        nomStatPrincipale: ['', Validators.required],
        valeurStatPrincipale: ['', [Validators.required,Validators.min(1)]],
        effetPassif: ['', Validators.required],
        atqBase: ['', [Validators.required,Validators.min(1)]],
        rarete: ['', Validators.required],
        selectedMats: ['',Validators.required],
        selectedMatsAmelio: ['', Validators.required]
      })
    }
  
    loadIconeFile(e: any) {
      this.icone = e.target.files[0]    
    }

    loadImageFile(e:any){
      this.image = e.target.files[0]
    }
  
    onSubmit(){
      this.armesService.create(this.createArmesFormGroup.value,this.icone,this.image)
      this.onCancel()
    }
  
    onCancel(){
      this.modalCtrl.dismiss()
    }
  
}
