import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notizia } from '../notizia/notizia.component';

@Injectable({
  providedIn: 'root'
})
// Servizio per la gestione delle operazioni con Firebase
export class FirebaseService {

  constructor(private http: HttpClient) { }

  // Ottiene la lista delle notizie
  getNotizia(url: string): Observable<Notizia> {
    return this.http.get<Notizia>(url);
  }

  // Inserisce una nuova notizia
  insertNotizia(url: string, notizia: Notizia): Observable<any> {
    return this.http.post(url, notizia);
  }
}
