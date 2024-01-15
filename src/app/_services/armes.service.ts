import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Armes } from '../_models/arme';

@Injectable({
  providedIn: 'root'
})
export class ArmesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<Armes[]>{
    return this.http.get<Armes[]>(this.url + "armes")
  }

  getByName(name:string):Observable<any>{    
    return this.http.get<Armes>(this.url+"armes/"+name)
  }

  getById(id:number):Observable<any>{
    return this.http.get<Armes>(this.url+"armes/"+id)
  }
}
