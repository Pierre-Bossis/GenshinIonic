import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LivresAptitude } from '../_models/livres-aptitude';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class LivresAptitudeService {
url:string = environment.apiurl
private listeLivresSubject = new Subject<void>();

  constructor(private http:HttpClient, private upload:UploadService) { }

  getAll():Observable<LivresAptitude[]>{
    return this.http.get<LivresAptitude[]>(this.url + "livresaptitude")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<LivresAptitude>(this.url + "livresaptitude/" + name)
  }

  getById(id:number): Observable<LivresAptitude> {
    return this.http.get<LivresAptitude>(this.url + "livresaptitude/" + id)
  }

  create(livre: LivresAptitude, fileToUpload: File) {
    const newLivre = this.upload.upload(fileToUpload);
  
    newLivre.append('Nom', livre.nom);
    newLivre.append('Source', livre.source);
    newLivre.append('Rarete', livre.rarete.toString());
  
    this.http.post(this.url + 'livresaptitude/create', newLivre).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeLivresSubject.next();
      })
    ).subscribe()
  }

  listeLivresUpdated$(): Observable<void> {
    return this.listeLivresSubject.asObservable();
  }
}
