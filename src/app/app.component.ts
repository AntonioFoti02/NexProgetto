import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

onInput(event : Event){
  this.title = (<HTMLInputElement>event.target).value
}

onClick(event: Event) {
  this.title = "Ho cliccato sul bottone"
}

}


