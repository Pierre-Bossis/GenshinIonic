import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnages, PersonnagesList } from '../_models/personnages';
import { Constellations } from '../_models/constellations';
import { Aptitudes } from '../_models/aptitudes';

@Injectable({
  providedIn: 'root'
})
export class PersonnagesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<PersonnagesList[]>{
    return this.http.get<PersonnagesList[]>(this.url + "personnages")
  }

  getByName(nom:string):Observable<any>{
    return this.http.get<any>(this.url + "personnages/" + nom)
  }

  // constellations
  getAllConstellations(id:number):Observable<Constellations[]>{
    return this.http.get<Constellations[]>(this.url+"personnages/"+id+"/constellations")
  }

  // aptitudes
  getAllAptitudes(id:number):Observable<Aptitudes[]>{
    return this.http.get<Aptitudes[]>(this.url+"personnages/"+id+"/aptitudes")
  }
}
