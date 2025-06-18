import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dette } from '../../models/dette.model';
import { Paiement } from '../../models/paiement.model';
import { DetteService } from '../../services/dette.service';
import { PaiementService } from '../../services/paiement.service';

@Component({
  selector: 'app-page-dette-detail',
  templateUrl: './page-dette-detail.component.html'
})
export class PageDetteDetailComponent implements OnInit {
  detteId!: number;
  dette?: Dette;
  paiements: Paiement[] = [];
  paiementsLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detteService: DetteService,
    private paiementService: PaiementService
  ) {}

  ngOnInit(): void {
    this.detteId = +this.route.snapshot.params['id'];
    this.loadDette();
    this.loadPaiements();
  }

  loadDette(): void {
    this.detteService.getById(this.detteId).subscribe(dette => {
      this.dette = dette;
    });
  }

  loadPaiements(): void {
    this.paiementService.getByDetteId(this.detteId).subscribe({
      next: (paiements) => {
        this.paiements = paiements;
        this.paiementsLoading = false;
      },
      error: () => {
        this.paiementsLoading = false;
        alert('Erreur lors du chargement des paiements');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/clients', this.dette?.clientId, 'dettes']);
  }

  addPaiement(): void {
    this.router.navigate(['/dettes', this.detteId, 'paiements', 'new']);
  }

}
