import { Component, OnInit } from '@angular/core';
import { Dette } from 'src/app/shared/models/dette.model';
import { DetteService } from 'src/app/shared/services/dette.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-page-add-dette',
  templateUrl: './page-add-dette.html'
})
export class PageAddDette implements OnInit {
  dette: Dette = {
    clientId: 0,
    date: new Date().toISOString().split('T')[0],
    montantDette: 0,
    montantPaye: 0,
    montantRestant: 0
  };

  clients: Client[] = [];

  constructor(
    private detteService: DetteService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.getAll().subscribe((data) => {
      this.clients = data;
    });
  }

  addDette() {
    this.dette.montantRestant = this.dette.montantDette; // logique initiale
    this.detteService.add(this.dette).subscribe(() => {
      alert('Dette ajoutée avec succès');
      this.dette = {
        clientId: 0,
        date: new Date().toISOString().split('T')[0],
        montantDette: 0,
        montantPaye: 0,
        montantRestant: 0
      };
    });
  }
}
