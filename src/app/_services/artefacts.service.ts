import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artefacts } from '../_models/artefacts';

@Injectable({
  providedIn: 'root'
})
export class ArtefactsService {
  url:string = environment.apiurl
  constructor(private client:HttpClient) { }

  getAll():Observable<Artefacts[]>{
    return this.client.get<Artefacts[]>(this.url + "artefacts")
  }

  getBySet(nomset:string):Observable<any>{
    return this.client.get<Artefacts[]>(this.url + "artefacts/" + nomset)
  }
}
