import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxElevationArmes } from '../_models/materiaux-elevation-armes';

@Injectable({
  providedIn: 'root'
})
export class MateriauxElevationArmesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<MateriauxElevationArmes[]>{
    return this.http.get<MateriauxElevationArmes[]>(this.url + "MateriauxElevationArmes")
  }
}
