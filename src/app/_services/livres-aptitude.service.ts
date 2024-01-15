import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LivresAptitude } from '../_models/livres-aptitude';

@Injectable({
  providedIn: 'root'
})
export class LivresAptitudeService {
url:string = environment.apiurl
  constructor(private http:HttpClient) { }

  getAll():Observable<LivresAptitude[]>{
    return this.http.get<LivresAptitude[]>(this.url + "livresaptitude")
  }
}
