import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importer les composants
import { HomeComponent } from './modules/general/home/home.component';
//import { ContactComponent } from './modules/general/contact/contact.component';
//import { AboutComponent } from './modules/general/about/about.component';
//import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { MailingModule } from './modules/general/contact/mailing/mailing.module';
import { MailingComponent } from './modules/general/contact/mailing/mailing.component';
import { MapModule } from './modules/general/contact/map/map.module';
import { MapComponent } from './modules/general/contact/map/map.component';
// importer les modules
/*
import { ContactModule } from './modules/general/contact/contact.module';
import { SigninModule } from './modules/general/signin/signin.module';
import { AboutModule } from './modules/general/about/about.module';
*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
