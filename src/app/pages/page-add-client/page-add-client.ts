import { Component } from '@angular/core';
import {Client} from '../../shared/models/client.model';
import {ClientService} from '../../shared/services/client.service';

@Component({
  selector: 'app-page-add-client',
  imports: [],
  templateUrl: './page-add-client.html',
  styleUrl: './page-add-client.css'
})
export class PageAddClient {
  client: Client = { nom: '', telephone: '', adresse: '' };

  constructor(private clientService: ClientService) {}

  addClient() {
    this.clientService.addClient(this.client).subscribe(() => {
      alert('Client ajouté');
      this.client = { nom: '', telephone: '', adresse: '' };
    });
  }
}
