import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectedUser, LoginForm, RegisterForm } from '../_models/user';
import { BehaviorSubject, Subject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = environment.apiurl
  connectedUserSubject: BehaviorSubject<ConnectedUser | undefined> = new BehaviorSubject<ConnectedUser | undefined>(undefined);
  constructor(private client:HttpClient,private route:Router, private storage:Storage)
  {
    this.initStorage()
  }
  async initStorage() {
    await this.storage.create();

    this.connectedUser.then((user) => {
      this.connectedUserSubject.next(user);
    });
  }

  get connectedUser() : Promise<ConnectedUser | undefined> {
    return this.storage.get("userInfo").then((userString) => {
      if (userString !== undefined) {        
        const user: ConnectedUser = JSON.parse(userString);
        return user;
      } else {
        return undefined
      }
    }).catch((error) => {
      console.error('Error retrieving connected user:', error);
      throw error;
    });
  }


  async login(logs: LoginForm) {
    try {
      const tokenResponse = await firstValueFrom(this.client.post(this.url + "auth/login", logs, { responseType: 'text' }));
      const token: string = tokenResponse !== undefined ? tokenResponse : '';
  
      await this.storage.set("token", token);
  
      let decodedToken: any = jwt_decode.jwtDecode(token);
      let cn: ConnectedUser = {
        id: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"],
        role: decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        email: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
        username: decodedToken["Username"],
        avatar_Id: decodedToken["Avatar_Id"]
      };
      await this.storage.set("userInfo", JSON.stringify(cn));
      this.connectedUserSubject.next(await this.connectedUser);
      this.route.navigate(["home"]);
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  
  

  register(user : RegisterForm) {    
    this.client.post(this.url+"auth/register", user).subscribe({
      next : () => {
        this.route.navigate(["home"])
      },
      error : (error) => {
        console.log(error.message);
      }
    })
  }

  async logout() {
    try {
      await this.storage.clear();
      this.connectedUserSubject.next(await this.connectedUser!);
      this.route.navigate(["home"]);
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}
