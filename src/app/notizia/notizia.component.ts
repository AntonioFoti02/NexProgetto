import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servizi/firebase.service';
import { CalendarioComponent } from '../calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from '../servizi/data-sharing.service';


export interface Notizia {
  descrizione: string;
  foto: string;
  dataNotizia: string;
}


@Component({
  selector: 'app-notizia',
  templateUrl: './notizia.component.html',
  styleUrls: ['./notizia.component.css']
})
export class NotiziaComponent implements OnInit {

  dataCalendario: string = '';

  notizia: Notizia = { descrizione: '', foto: '', dataNotizia: '' }

  notizie: Notizia[] = []

  constructor(private firebase: FirebaseService, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.dataSharingService.currentDataCalendario.subscribe(dataCalendario => {
      this.dataCalendario = this.convertDateFormat(dataCalendario);
      console.log('Data Calendario:', this.dataCalendario);
    });
    
    // Prende le notizie dal database
     this.firebase.getNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json')
       .subscribe((data: any) =>{
         this.notizie = Object.keys(data).map(key => data[key])
         console.log(this.notizie);
         this.notizie.forEach(notizia => {
          console.log('Notizia:', notizia);
        });
     })

     
    // Inserire dati nel database
        // this.firebase.insertNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json', 
        // {
        //   foto: 'https://external-preview.redd.it/C8MCw7NqsCghQNAXlYOcAbK47CkBMOiOh4LZR0MI978.jpg?width=640&crop=smart&auto=webp&s=19218ef3a52962ee712ee2dd2b81a79c12109f43',
        //   descrizione: 'Eminem, nome d\'arte di Marshall Mathers, è uno dei rapper più celebri di tutti i tempi. Nato nel 1972, ha rivoluzionato l’hip-hop con album come The Slim Shady LP e The Marshall Mathers LP. È noto per il suo stile tecnico, i testi crudi e l’abilità nel freestyle. Con hit come Lose Yourself e Without Me, ha conquistato il pubblico globale. Ha vinto numerosi Grammy e un Oscar per la colonna sonora di 8 Mile. Nonostante le controversie, ha affrontato temi come povertà, dipendenze e difficoltà familiari. È considerato uno dei migliori liricisti della storia del rap.',
        //   dataNotizia: '2025.02.16'
        //   //dataNotizia: `${this.today.toISOString().split('T')[0]}`
        // }).subscribe(data => {
        //   console.log(data)
        // })
  }


  private convertDateFormat(date: string): string {
    return date.replace(/-/g, '.');
  }

}


