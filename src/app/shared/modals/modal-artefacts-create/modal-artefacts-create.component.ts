import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ArtefactsService } from 'src/app/_services/artefacts.service';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-modal-artefacts-create',
  templateUrl: './modal-artefacts-create.component.html',
  styleUrls: ['./modal-artefacts-create.component.scss'],
})
export class ModalArtefactsCreateComponent  implements OnInit {
  myFile! : File
  createArtefactsFormGroup!:FormGroup
    constructor(private formBuilder:FormBuilder,private uploadService:UploadService,private modalCtrl:ModalController, private artefactsService:ArtefactsService) { }
  
    ngOnInit(){
      this.createArtefactsFormGroup = this.formBuilder.group({
        nom: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
        nomSet: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
        type: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
        bonus2Pieces: ['', [Validators.required,Validators.minLength(2)]],
        bonus4Pieces: ['', [Validators.required,Validators.minLength(2)]],
        source: ['',[Validators.required,Validators.minLength(2)]]
      })
    }
  
    loadFile(e: any) {
      this.myFile = e.target.files[0]    
    }
  
    onSubmit(){
      const fullForm = this.createArtefactsFormGroup.value
      this.artefactsService.create(fullForm,this.myFile)
      this.onCancel()
    }
  
    onCancel(){
      this.modalCtrl.dismiss()
    }
}
