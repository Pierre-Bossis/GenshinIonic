import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle'
register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController) {}
  showResourceOptions = false;

  toggleResourceOptions() {
    this.showResourceOptions = !this.showResourceOptions;
  }

  selectOption(option: string) {
    this.menuCtrl.close()    
    //naviguate
  }
}

