import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListClientsComponent} from './pages/page-client/page-client';
import {PageListDettesComponent} from './pages/page-list-dette/page-list-dette';
import {PageDetteDetailComponent} from './pages/page-dette-detail/page-dette-detail';




const routes: Routes = [
  { path: 'clients', component: PageListClientsComponent },
  { path: 'clients/:id/dettes', component: PageListDettesComponent },
  { path: 'clients/:clientId/dettes/new', component: PageAddDetteComponent },
  { path: 'dettes/:id', component: PageDetteDetailComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
