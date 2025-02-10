import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDate: string = '';

  onDateSelected(date: string) {
    this.selectedDate = date;
  }

  // Variabile per il two binding esempio
  title = 'NexProgetto'

  // Variabile per la direttiva "ngIf" esempio
  isVisible = true

  // Variabile per l'esempio di ngSwitch
  numero = 3

  // Array che serve per l'esempio di ngFor
  persone = [
    {nome: "luca", cognome: "rossi"},
    {nome: "marco", cognome: "dolci"},
    {nome: "alberto", cognome: "fragola"}
  ]

  // Array per l'esempio di ngStyle
  persone2 = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "dolci", isOnline: false},
    {nome: "alberto", cognome: "fragola", isOnline: false},
    {nome: "leona", cognome: "down", isOnline: true},
    {nome: "gabriele", cognome: "ciao", isOnline: false}
  ]

  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(event: Event) {
    this.title = "Ho cliccato sul bottone"
  }

}


