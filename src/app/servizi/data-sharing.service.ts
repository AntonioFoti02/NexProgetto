import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Servizio per la condivisione di dati tra componenti
export class DataSharingService {
  private dataCalendarioSource = new BehaviorSubject<string>('');
  currentDataCalendario = this.dataCalendarioSource.asObservable();

  // Cambia la data del calendario
  changeDataCalendario(dataCalendario: string) {
    this.dataCalendarioSource.next(dataCalendario);
  }
}