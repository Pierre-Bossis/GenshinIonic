import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { MateriauxAmeliorationPersonnages } from '../_models/materiaux-amelioration-personnages';
import { environment } from 'src/environments/environment';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesService {
url:string = environment.apiurl
private listeMateriauxAmelioPersosSubject = new Subject<void>();

  constructor(private http:HttpClient, private upload:UploadService) { }

  getAll():Observable<MateriauxAmeliorationPersonnages[]>{
    return this.http.get<MateriauxAmeliorationPersonnages[]>(this.url + "materiauxameliorationpersonnages")
  }

  getByName(name: string): Observable<MateriauxAmeliorationPersonnages> {
    return this.http.get<MateriauxAmeliorationPersonnages>(this.url + "materiauxameliorationpersonnages/" + name)
  }

  getById(id:number): Observable<MateriauxAmeliorationPersonnages> {
    return this.http.get<MateriauxAmeliorationPersonnages>(this.url + "materiauxameliorationpersonnages/" + id)
  }

  create(materiau: MateriauxAmeliorationPersonnages, fileToUpload: File) {
    const newMat = this.upload.upload(fileToUpload);
  
    newMat.append('Nom', materiau.nom);
    newMat.append('Source', materiau.source);
    newMat.append('Rarete', materiau.rarete.toString());
  
    this.http.post(this.url + 'materiauxameliorationpersonnages/create', newMat).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeMateriauxAmelioPersosSubject.next();
      })
    ).subscribe()
  }
  listeMateriauxUpdated$(): Observable<void> {
    return this.listeMateriauxAmelioPersosSubject.asObservable();
  }
}
