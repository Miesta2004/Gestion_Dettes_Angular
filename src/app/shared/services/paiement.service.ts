import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiement } from '../models/paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private apiUrl = 'http://localhost:3000/paiements';

  constructor(private http: HttpClient) { }

  getPaiementsByDette(detteId: number): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.apiUrl}?detteId=${detteId}`);
  }
}
