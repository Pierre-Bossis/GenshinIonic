import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxElevationPersonnages, MateriauxElevationPersonnagesForm } from '../_models/materiaux-elevation-personnages';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationPersonnagesService {
url:string = environment.apiurl
private listeMateriauxElevationPersonnagesSubject = new Subject<void>();

  constructor(private http:HttpClient, private upload:UploadService) { }

  getAll():Observable<MateriauxElevationPersonnages[]>{
    return this.http.get<MateriauxElevationPersonnages[]>(this.url + "materiauxelevationpersonnages")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + name)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + id)
  }

  create(materiau: MateriauxElevationPersonnagesForm, fileToUpload: File) {
    const newMat = this.upload.upload(fileToUpload);
  
    newMat.append('Nom', materiau.nom);
    newMat.append('Source', materiau.source);
    newMat.append('Rarete', materiau.rarete.toString());
  
    this.http.post(this.url + 'materiauxelevationpersonnages/create', newMat).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeMateriauxElevationPersonnagesSubject.next();
      })
    ).subscribe()
  }
  listeMateriauxUpdated$(): Observable<void> {
    return this.listeMateriauxElevationPersonnagesSubject.asObservable();
  }
}
