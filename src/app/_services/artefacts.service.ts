import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artefacts, ArtefactsForm } from '../_models/artefacts';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ArtefactsService {
  url:string = environment.apiurl
  private listeArtefactsSubject = new Subject<void>();
  constructor(private client:HttpClient, private upload:UploadService) { }

  getAll():Observable<Artefacts[]>{
    return this.client.get<Artefacts[]>(this.url + "artefacts")
  }

  getBySet(nomset:string):Observable<any>{
    return this.client.get<Artefacts[]>(this.url + "artefacts/" + nomset)
  }

  create(artefact: ArtefactsForm,fileToUpload:File) {
    const newArtefact = this.upload.upload(fileToUpload)
    
    newArtefact.append('Nom',artefact.nom)
    newArtefact.append('NomSet',artefact.nomSet)
    newArtefact.append('Type',artefact.type)
    newArtefact.append('Bonus2Pieces',artefact.bonus2Pieces)
    newArtefact.append('Bonus4Pieces',artefact.bonus4Pieces)
    newArtefact.append('Source',artefact.source)
    console.log("test");
    
    this.client.post(this.url + 'artefacts/create', newArtefact).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeArtefactsSubject.next();
      })
    ).subscribe()
  }

  listeArtefactsUpdated$(): Observable<void> {
    return this.listeArtefactsSubject.asObservable();
  }
}
