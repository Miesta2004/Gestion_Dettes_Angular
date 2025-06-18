import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dette } from '../../models/dette.model';
import { Client } from '../../models/client.model';
import { DetteService } from '../../services/dette.service';
import { ClientService } from '../../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-add-dette',
  templateUrl: './page-add-dette.component.html',
  styleUrls: ['./page-add-dette.component.css']
})
export class PageAddDetteComponent implements OnInit {
  client!: Client;
  dette: Dette = {
    clientId: 0,
    date: new Date().toISOString().split('T')[0],
    montantDette: null,
    montantPaye: 0,
  };
  isLoading = false;

  constructor(
    private detteService: DetteService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const clientId = +this.route.snapshot.params['clientId'];
    this.loadClient(clientId);
  }

  loadClient(clientId: number): void {
    this.clientService.getById(clientId).subscribe({
      next: (client) => {
        this.client = client;
        this.dette.clientId = client.id;
      },
      error: () => {
        this.snackBar.open('Erreur lors du chargement du client', 'Fermer', { duration: 3000 });
        this.router.navigate(['/clients']);
      }
    });
  }

  get detteFormValid(): boolean {
    return !!this.dette.date && !!this.dette.montantDette && this.dette.montantDette > 0;
  }

  addDette(): void {
    if (!this.detteFormValid) {
      this.snackBar.open('Veuillez remplir tous les champs obligatoires', 'Fermer', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    this.detteService.create(this.dette).subscribe({
      next: () => {
        this.snackBar.open('Dette ajoutée avec succès', 'Fermer', { duration: 3000 });
        this.router.navigate(['/clients', this.client.id, 'dettes']);
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Erreur lors de l\'ajout de la dette', 'Fermer', { duration: 3000 });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clients', this.client.id, 'dettes']);
  }
}
