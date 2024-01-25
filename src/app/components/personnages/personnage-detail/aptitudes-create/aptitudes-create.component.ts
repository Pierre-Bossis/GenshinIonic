import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-aptitudes-create',
  templateUrl: './aptitudes-create.component.html',
  styleUrls: ['./aptitudes-create.component.scss'],
})
export class AptitudesCreateComponent  implements OnInit {
  @Input() personnageId!:number
  @Output() aptitudeCreated: EventEmitter<any> = new EventEmitter();
  createAptitudeFormGroup!:FormGroup
  myFile!:File
    constructor(private personnagesService:PersonnagesService,private formBuilder:FormBuilder) { }
  
    ngOnInit(){
      this.createAptitudeFormGroup = this.formBuilder.group({
        nom: ['', [Validators.required,Validators.minLength(2)]],
        description: ['', Validators.required],
        personnage_Id: [this.personnageId,Validators.required]
      })
    }
  
  
    loadFile(e:any){
      this.myFile = e.target.files[0]
    }
  
    onSubmit(){
       if(this.myFile)    
       this.personnagesService.createAptitude(this.createAptitudeFormGroup.value,this.myFile).subscribe(() => {
         this.aptitudeCreated.emit();
       })
    }
}
