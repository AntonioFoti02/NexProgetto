import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataCalendarioSource = new BehaviorSubject<string>('');
  currentDataCalendario = this.dataCalendarioSource.asObservable();

  changeDataCalendario(dataCalendario: string) {
    this.dataCalendarioSource.next(dataCalendario);
  }
}