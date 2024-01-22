import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxAmeliorationPersonnagesEtArmes } from '../_models/materiaux-amelioration-personnages-et-armes';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesEtArmesService {
url:string = environment.apiurl
private listeMateriauxAmelioPersosArmesSubject = new Subject<void>();
  constructor(private http:HttpClient, private upload:UploadService) { }

  getAll():Observable<MateriauxAmeliorationPersonnagesEtArmes[]>{
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes[]>(this.url + "materiauxameliorationpersonnagesetarmes")
  }

  getByName(name: string): Observable<MateriauxAmeliorationPersonnagesEtArmes> {
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes>(this.url + "materiauxameliorationpersonnagesetarmes/" + name)
  }

  getById(id:number): Observable<MateriauxAmeliorationPersonnagesEtArmes> {
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes>(this.url + "materiauxameliorationpersonnagesetarmes/" + id)
  }

  create(materiau: MateriauxAmeliorationPersonnagesEtArmes, fileToUpload: File) {
    const newMat = this.upload.upload(fileToUpload);
  
    newMat.append('Nom', materiau.nom);
    newMat.append('Source', materiau.source);
    newMat.append('Rarete', materiau.rarete.toString());
  
    this.http.post(this.url + 'materiauxameliorationpersonnagesetarmes/create', newMat).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeMateriauxAmelioPersosArmesSubject.next();
      })
    ).subscribe()
  }
  listeMateriauxUpdated$(): Observable<void> {
    return this.listeMateriauxAmelioPersosArmesSubject.asObservable();
  }
}
