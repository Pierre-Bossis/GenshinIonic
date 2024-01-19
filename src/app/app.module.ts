import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TokenInterceptorService } from './_services/interceptors/token-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,IonicStorageModule.forRoot(),HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
