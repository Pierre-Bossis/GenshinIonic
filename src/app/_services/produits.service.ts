import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produits } from '../_models/produits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<Produits[]>{
    return this.http.get<Produits[]>(this.url + 'produits')
  }

  getByName(name: string): Observable<any> {
    return this.http.get<Produits>(this.url + "produits/" + name)
  }

  getById(id:number): Observable<Produits> {
    return this.http.get<Produits>(this.url + "produits/" + id)
  }
}
