import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConnectedUser } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.page.html',
  styleUrls: ['./jukebox.page.scss'],
})
export class JukeboxPage implements OnInit, OnDestroy{

  constructor(private authService:AuthService) { }
  connectedUser!:ConnectedUser | undefined
  connectedUserSubscription!:Subscription
  
  ngOnInit() {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser
    });
  }
  
  ngOnDestroy(): void {
    if(this.connectedUserSubscription)
      this.connectedUserSubscription.unsubscribe()
  }
}
