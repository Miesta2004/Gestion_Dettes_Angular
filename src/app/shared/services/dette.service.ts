import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dette } from '../models/dette.model';

@Injectable({
  providedIn: 'root'
})
export class DetteService {
  private apiUrl = 'http://localhost:3000/dettes';

  constructor(private http: HttpClient) { }

  getDettesByClient(clientId: number): Observable<Dette[]> {
    return this.http.get<Dette[]>(`${this.apiUrl}?clientId=${clientId}`);
  }

  addDette(dette: Dette): Observable<Dette> {
    return this.http.post<Dette>(this.apiUrl, dette);
  }

}
