import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Armes, ArmesForm } from '../_models/arme';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ArmesService {
url:string = environment.apiurl
private listeArmesSubject = new Subject<void>();
  constructor(private http:HttpClient,private upload:UploadService) { }

  getAll():Observable<Armes[]>{
    return this.http.get<Armes[]>(this.url + "armes")
  }

  getByName(name:string):Observable<any>{    
    return this.http.get<Armes>(this.url+"armes/"+name)
  }

  getById(id:number):Observable<any>{
    return this.http.get<Armes>(this.url+"armes/"+id)
  }

  create(arme: ArmesForm,icone:File,image:File) {
    const newArme = this.upload.upload(icone,image)

    newArme.append('Nom',arme.nom)
    newArme.append('TypeArme',arme.typeArme)
    newArme.append('Description',arme.description)
    newArme.append('NomStatPrincipale',arme.nomStatPrincipale)

    const valeurString = arme.valeurStatPrincipale.toString().replace('.', ',');
    newArme.append('ValeurStatPrincipale',valeurString)

    newArme.append('EffetPassif',arme.effetPassif)
    newArme.append('ATQBase',arme.atqBase.toString())
    newArme.append('Rarete',arme.rarete.toString())
   
    arme.selectedMats.forEach((matId: number) => {
      newArme.append('SelectedMats', matId.toString());
    });

    arme.selectedMatsAmelio.forEach((matId: number) => {
      newArme.append('selectedMatsAmelio', matId.toString());
    });
  
    this.http.post(this.url + 'armes/create', newArme).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeArmesSubject.next();
      })
    ).subscribe()
  }

  listeArmesUpdated$(): Observable<void> {
    return this.listeArmesSubject.asObservable();
  }
}
