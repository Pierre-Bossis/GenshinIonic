import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LivresAptitudeService } from 'src/app/_services/livres-aptitude.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { MateriauxElevationArmesService } from 'src/app/_services/materiaux-elevation-armes.service';
import { MateriauxElevationPersonnagesService } from 'src/app/_services/materiaux-elevation-personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-modal-resources-create',
  templateUrl: './modal-resources-create.component.html',
  styleUrls: ['./modal-resources-create.component.scss'],
})
export class ModalResourcesCreateComponent  implements OnInit {
@Input() item!:string
myFile? : File
createResourceFormGroup!:FormGroup
  constructor(private formBuilder:FormBuilder,private uploadService:UploadService,private modalCtrl:ModalController, private matsElevArmesService:MateriauxElevationArmesService,private produitsService:ProduitsService,
              private matsAmelioPersos:MateriauxAmeliorationPersonnagesService,private matsElevPersos:MateriauxElevationPersonnagesService,
              private livresAptitudeService:LivresAptitudeService,private matsAmelioPersosArmesService:MateriauxAmeliorationPersonnagesEtArmesService) { }

  ngOnInit(){
    this.createResourceFormGroup = this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(2)]],
      source: ['', Validators.required],
      rarete: ['', [Validators.required,Validators.min(1),Validators.max(5)]],
    })
  }

  loadFile(e: any) {
    this.myFile = e.target.files[0]    
  }

  onSubmit(){
    const fullForm = this.createResourceFormGroup.value
    switch(this.item){
      case 'Materiau Elevation Armes':
        //create materiaux elevation armes
        break
      case 'Produit':
        //this.produitsService.create(fullform,this.myFile)
        break
      case 'Materiau Amelioration Personnages':
        //create
        break
      case 'Materiau Elevation Personnages':
        //create
        break
      case 'Livre Aptitude':
        //create
        break
      case 'Materiau Amelioration Personnages Et Armes':
        //create
        break
      default:
        return
    }
    this.onCancel()
  }

  onCancel(){
    this.modalCtrl.dismiss()
  }

}
