import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// *** Dans 'un premier temps on doit configurer les Routes
// *** importer les composants
//import {AboutComponent} from './modules/general/about/about.component';
//import {ContactComponent} from './modules/general/contact/contact.component';
import {HomeComponent} from './modules/general/home/home.component';
//import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

// *** charger les pages selon la demande avec la théorie '--lazy loading--'
const routes: Routes = [

  {path: '', component: HomeComponent, },

  {path: 'about',
   loadChildren:() => import('./modules/general/about/about.module') 
   .then(mod => mod.AboutModule) 
  },
  {path: 'contact', 
   loadChildren:() => import('./modules/general/contact/contact.module')
   .then(mod => mod.ContactModule)
  },
  {path: 'signin', 
   loadChildren:() => import('./modules/general/signin/signin.module')
   .then(mod => mod.SigninModule)
  },
  
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
