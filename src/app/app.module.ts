import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
import { OnePagePipe } from './one-page.pipe';
import { IvyGalleryModule } from 'angular-gallery';
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [AppComponent, LoginPipe, OnePagePipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IvyGalleryModule,HttpClientModule,FormsModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
