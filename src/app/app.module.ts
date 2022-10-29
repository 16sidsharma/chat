import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
import { OnePagePipe } from './one-page.pipe';
import { IvyGalleryModule } from 'angular-gallery';
import { HeaderPage } from './header/header.page';

@NgModule({
  declarations: [AppComponent, LoginPipe, OnePagePipe,HeaderPage],
    
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IvyGalleryModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
