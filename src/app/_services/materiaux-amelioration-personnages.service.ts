import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriauxAmeliorationPersonnages } from '../_models/materiaux-amelioration-personnages';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<MateriauxAmeliorationPersonnages[]>{
    return this.http.get<MateriauxAmeliorationPersonnages[]>(this.url + "materiauxameliorationpersonnages")
  }

  getByName(name: string): Observable<MateriauxAmeliorationPersonnages> {
    return this.http.get<MateriauxAmeliorationPersonnages>(this.url + "materiauxameliorationpersonnages/" + name)
  }

  getById(id:number): Observable<MateriauxAmeliorationPersonnages> {
    return this.http.get<MateriauxAmeliorationPersonnages>(this.url + "materiauxameliorationpersonnages/" + id)
  }
}
