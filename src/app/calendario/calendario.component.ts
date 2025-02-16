import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataSharingService } from '../servizi/data-sharing.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    BrowserModule
  ],
})
export class CalendarioComponent implements OnInit {

  dataCalendario: string = '';

  constructor(private dataSharingService: DataSharingService) {}

  // Inizializza il componente
  ngOnInit(): void {
    const today = new Date();
    this.dataCalendario = this.formatDate(today); // Formatta la data come 'YYYY-MM-DD'
    this.dataSharingService.changeDataCalendario(this.dataCalendario);
    console.log('Data Calendario iniziale:', this.dataCalendario);
  }

  // Metodo che viene chiamato quando la data viene cambiata
  onDateChange(event: any): void {
    const selectedDate = new Date(event.value);
    this.dataCalendario = this.formatDate(selectedDate);
    this.dataSharingService.changeDataCalendario(this.dataCalendario);
    console.log('Data Calendario selezionata:', this.dataCalendario);
  }

  // Metodo che formatta la data come 'YYYY-MM-DD'
  private formatDate(date: Date): string {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - (offset * 60 * 1000));
    return adjustedDate.toISOString().split('T')[0];
  }

}
