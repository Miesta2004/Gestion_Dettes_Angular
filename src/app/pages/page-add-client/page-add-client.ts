import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Client} from '../../shared/models/client.model';
import {ClientService} from '../../shared/services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.css']
})
export class PageAddClientComponent {
  client: Client = {
    nom: '',
    telephone: '',
    adresse: ''
  };
  isLoading = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  addClient(): void {
    if (!this.client.nom || !this.client.telephone || !this.client.adresse) {
      this.snackBar.open('Veuillez remplir tous les champs obligatoires', 'Fermer', {
        duration: 3000
      });
      return;
    }

    this.isLoading = true;
    this.clientService.create(this.client).subscribe({
      next: () => {
        this.snackBar.open('Client ajouté avec succès', 'Fermer', {
          duration: 3000
        });
        this.router.navigate(['/clients']);
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Erreur lors de l\'ajout du client', 'Fermer', {
          duration: 3000
        });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
