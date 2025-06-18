import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dette } from '../../models/dette.model';
import { Client } from '../../models/client.model';
import { DetteService } from '../../services/dette.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-list-dettes',
  templateUrl: './page-list-dettes.component.html'
})
export class PageListDettesComponent implements OnInit {
  clientId!: number;
  client?: Client;
  dettes: Dette[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detteService: DetteService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientId = +this.route.snapshot.params['id'];
    this.loadClient();
    this.loadDettes();
  }

  loadClient(): void {
    this.clientService.getById(this.clientId).subscribe(client => {
      this.client = client;
    });
  }

  loadDettes(): void {
    this.detteService.getByClientId(this.clientId).subscribe({
      next: (dettes) => {
        this.dettes = dettes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Erreur lors du chargement des dettes');
      }
    });
  }

  addDette(): void {
    this.router.navigate(['/clients', this.clientId, 'dettes', 'new']);
  }

  viewDetteDetails(detteId: number): void {
    this.router.navigate(['/dettes', detteId]);
  }
}
