import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle'
import { AuthService } from './_services/auth.service';
import { ConnectedUser } from './_models/user';
register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showResourceOptions = false;
  connectedUser!:ConnectedUser | undefined
  constructor(private menuCtrl: MenuController, private authService:AuthService) {}
  ngOnInit() {
    this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
    });
  }

  toggleResourceOptions() {
    this.showResourceOptions = !this.showResourceOptions;
  }

  selectOption(option: string) {
    this.menuCtrl.close()
  }

  logout(){
    this.authService.logout()
  }
}

