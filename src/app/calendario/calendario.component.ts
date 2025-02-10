import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
export class CalendarioComponent {

  // Collegata tramite Binding con l'HTML sul calendario
  dataNotizia: string = 'Data della notizia'


  // Provare a vedere se all'inizializzazione del componente è possibile 
  // impostare la data odierna in automatico
  onInit(): void {
    const today = new Date()
    this.dataNotizia = today.toISOString().split('T')[0]

    
  }

  
}
