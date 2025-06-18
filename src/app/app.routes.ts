import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageListClientsComponent} from './pages/page-client/page-client';
import {PageAddClientComponent} from './pages/page-add-client/page-add-client';
import {PageListDettesComponent} from './pages/page-list-dette/page-list-dette';
import {PageAddDetteComponent} from './pages/page-add-dette/page-add-dette';
import {PageDetteDetailComponent} from './pages/page-dette-detail/page-dette-detail';

const routes: Routes = [
  // Liste des clients
  { path: 'clients', component: PageListClientsComponent },

  // Ajout d'un nouveau client
  { path: 'clients/new', component: PageAddClientComponent },

  // Liste des dettes d'un client spécifique
  { path: 'clients/:clientId/dettes', component: PageListDettesComponent },

  // Ajout d'une nouvelle dette pour un client spécifique
  { path: 'clients/:clientId/dettes/new', component: PageAddDetteComponent },

  // Détails d'une dette spécifique (avec paiements)
  { path: 'dettes/:detteId', component: PageDetteDetailComponent },

  // Route par défaut
  { path: '', redirectTo: '/clients', pathMatch: 'full' },

  // Gestion des routes inconnues
  { path: '**', redirectTo: '/clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
