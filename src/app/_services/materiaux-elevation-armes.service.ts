import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxElevationArmes } from '../_models/materiaux-elevation-armes';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationArmesService {
  url: string = environment.apiurl
  private listeMateriauxSubject = new Subject<void>();
  constructor(private http: HttpClient, private upload: UploadService) { }

  getAll(): Observable<MateriauxElevationArmes[]> {
    return this.http.get<MateriauxElevationArmes[]>(this.url + "MateriauxElevationArmes")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationarmes/" + name)
  }

  create(materiau: MateriauxElevationArmes, fileToUpload: File) {
    const newMat = this.upload.upload(fileToUpload);
  
    newMat.append('Nom', materiau.nom);
    newMat.append('Source', materiau.source);
    newMat.append('Rarete', materiau.rarete.toString());
  
    this.http.post(this.url + 'materiauxelevationarmes/create', newMat).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeMateriauxSubject.next();
      })
    ).subscribe()
  }
  listeMateriauxUpdated$(): Observable<void> {
    return this.listeMateriauxSubject.asObservable();
  }
}