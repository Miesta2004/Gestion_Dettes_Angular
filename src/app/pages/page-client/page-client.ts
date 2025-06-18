import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Client} from '../../shared/models/client.model';
import {ClientService} from '../../shared/services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html'
})
export class PageListClientsComponent implements OnInit {
  clients: Client[] = [];
  isLoading = true;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Erreur lors du chargement des clients');
      }
    });
  }

  viewClientDettes(clientId: number): void {
    this.router.navigate(['/clients', clientId, 'dettes']);
  }
}
