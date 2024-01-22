import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produits } from '../_models/produits';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
url:string = environment.apiurl
private listeProduitsSubject = new Subject<void>();
  constructor(private http:HttpClient,private upload:UploadService) { }

  getAll():Observable<Produits[]>{
    return this.http.get<Produits[]>(this.url + 'produits')
  }

  getByName(name: string): Observable<any> {
    return this.http.get<Produits>(this.url + "produits/" + name)
  }

  getById(id:number): Observable<Produits> {
    return this.http.get<Produits>(this.url + "produits/" + id)
  }

  create(materiau: Produits, fileToUpload: File) {
    const newMat = this.upload.upload(fileToUpload);
  
    newMat.append('Nom', materiau.nom);
    newMat.append('Source', materiau.source);
    newMat.append('Rarete', materiau.rarete.toString());
  
    this.http.post(this.url + 'produits/create', newMat).pipe(
      switchMap(() => this.getAll().pipe(take(1))),
      tap(() => {
        this.listeProduitsSubject.next();
      })
    ).subscribe()
  }
  listeProduitsUpdated$(): Observable<void> {
    return this.listeProduitsSubject.asObservable();
  }
}
