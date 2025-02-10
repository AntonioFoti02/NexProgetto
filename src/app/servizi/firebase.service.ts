import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notizia } from '../notizia/notizia.component';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  getNotizia(url: string): Observable<Notizia> {
    return this.http.get<Notizia>(url);
  }

  insertNotizia(url: string, notizia: Notizia): Observable<any> {
    return this.http.post(url, notizia);
  }
}
