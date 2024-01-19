import { Component, OnDestroy, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  connectedUser!:ConnectedUser | undefined
  connectedUserSubscription!:Subscription
  constructor(private authService:AuthService,private storage:Storage){}
  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }

  logout(){
    this.authService.logout()
  }

  ngOnDestroy() {
    // Désabonnement lors de la destruction du composant
    if (this.connectedUserSubscription) {
      this.connectedUserSubscription.unsubscribe();
    }
  }
  }
