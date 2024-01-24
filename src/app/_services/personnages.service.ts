import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnages, PersonnagesForm, PersonnagesList } from '../_models/personnages';
import { Constellations } from '../_models/constellations';
import { Aptitudes } from '../_models/aptitudes';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {
url:string = environment.apiurl
private listePersonnagesSubject = new Subject<void>();
  constructor(private http:HttpClient, private upload:UploadService) { }

  getAll():Observable<PersonnagesList[]>{
    return this.http.get<PersonnagesList[]>(this.url + "personnages")
  }

  getByName(nom:string):Observable<any>{
    return this.http.get<any>(this.url + "personnages/" + nom)
  }

  create(personnage : PersonnagesForm,icone:File,image:File){
    const newPersonnage = this.upload.upload(icone,image)

    newPersonnage.append('Nom',personnage.nom)
    newPersonnage.append('OeilDivin',personnage.oeilDivin)
    newPersonnage.append('TypeArme',personnage.typeArme)
    newPersonnage.append('Lore',personnage.lore)
    newPersonnage.append('Nationalite',personnage.nationalite)
    newPersonnage.append('TrailerYT',personnage.trailerYT)
    newPersonnage.append('DateSortie',personnage.dateSortie.toString())
    
    if(personnage.armeId != null)
      newPersonnage.append('Arme_Id',personnage.armeId.toString())

    newPersonnage.append('MateriauxAmeliorationPersonnage_Id',personnage.materiauxAmeliorationPersonnageId.toString())
    newPersonnage.append('Produit_Id',personnage.produitId.toString())
    newPersonnage.append('Rarete',personnage.rarete.toString())

    personnage.selectedLivres.forEach((livreId: number) => {
      newPersonnage.append('SelectedLivres', livreId.toString());
    });

    personnage.selectedMatsElevation.forEach((matElevId: number) => {
      newPersonnage.append('SelectedMatsElevation', matElevId.toString());
    });

    personnage.selectedMatsAmelioPersosArmes.forEach((matAmelioId: number) => {
      newPersonnage.append('SelectedMatsAmelioPersosArmes', matAmelioId.toString());
    });
    
    this.http.post(this.url + 'personnages/create', newPersonnage).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listePersonnagesSubject.next();
      })
    ).subscribe()
  }

  listePersonnagesUpdated$(): Observable<void> {
    return this.listePersonnagesSubject.asObservable();
  }

  // constellations
  getAllConstellations(id:number):Observable<Constellations[]>{
    return this.http.get<Constellations[]>(this.url+"personnages/"+id+"/constellations")
  }

  // aptitudes
  getAllAptitudes(id:number):Observable<Aptitudes[]>{
    return this.http.get<Aptitudes[]>(this.url+"personnages/"+id+"/aptitudes")
  }
}
