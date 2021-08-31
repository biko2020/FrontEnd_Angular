import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *** Dans 'un premier temps on doit configurer les Routes
// *** importer les composants
import {AboutComponent} from './modules/general/about/about.component';
import {ContactComponent} from './modules/general/contact/contact.component';
import {HomeComponent} from './modules/general/home/home.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

// *** creer le chemain vers les pages
const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'about',component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'signin', component: SigninComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
