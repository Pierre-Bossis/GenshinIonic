import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JukeboxPageRoutingModule } from './jukebox-routing.module';

import { JukeboxPage } from './jukebox.page';
import { YouTubePlayer,YOUTUBE_PLAYER_CONFIG } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouTubePlayer,
    JukeboxPageRoutingModule
  ],
  declarations: [JukeboxPage],
  providers: [{
    provide: YOUTUBE_PLAYER_CONFIG,
    useValue: {
      disablePlaceholder: true
    }
  }]
})
export class JukeboxPageModule {}
