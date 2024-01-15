import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxElevationPersonnages } from '../_models/materiaux-elevation-personnages';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationPersonnagesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<MateriauxElevationPersonnages[]>{
    return this.http.get<MateriauxElevationPersonnages[]>(this.url + "materiauxelevationpersonnages")
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + name)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.url + "materiauxelevationpersonnages/" + id)
  }
}
