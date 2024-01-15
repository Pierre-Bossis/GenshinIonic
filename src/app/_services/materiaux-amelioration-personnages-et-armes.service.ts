import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MateriauxAmeliorationPersonnagesEtArmes } from '../_models/materiaux-amelioration-personnages-et-armes';

@Injectable({
  providedIn: 'root'
})
export class MateriauxAmeliorationPersonnagesEtArmesService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<MateriauxAmeliorationPersonnagesEtArmes[]>{
    return this.http.get<MateriauxAmeliorationPersonnagesEtArmes[]>(this.url + "materiauxameliorationpersonnagesetarmes")
  }
}
