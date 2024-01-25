import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnagesService } from 'src/app/_services/personnages.service';

@Component({
  selector: 'app-constellations-create',
  templateUrl: './constellations-create.component.html',
  styleUrls: ['./constellations-create.component.scss'],
})
export class ConstellationsCreateComponent  implements OnInit {
@Input() personnageId!:number
@Output() constellationCreated: EventEmitter<any> = new EventEmitter();
createConstellationFormGroup!:FormGroup
myFile!:File
  constructor(private personnagesService:PersonnagesService,private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.createConstellationFormGroup = this.formBuilder.group({
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
     this.personnagesService.createConstellation(this.createConstellationFormGroup.value,this.myFile).subscribe(() => {
       this.constellationCreated.emit();
     })
  }
}
