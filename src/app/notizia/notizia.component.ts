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
    
    // Esempio di prova di come prendere dati dal database
     this.firebase.getNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json')
       .subscribe((data: any) =>{
         this.notizie = Object.keys(data).map(key => data[key])
         console.log(this.notizie);
         this.notizie.forEach(notizia => {
          console.log('Notizia:', notizia);
        });
     })

     
    // Esempio di prova di come insetrire dati nel database
      //  this.firebase.insertNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json', 
      //  {
      //    foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Post_Malone_July_2021.jpg/300px-Post_Malone_July_2021.jpg',
      //    descrizione: 'Oggi è un giorno speciale per la musica, perché Post Malone ha raggiunto un traguardo straordinario: è diventato l\'artista con il maggior numero di nomination ai Grammy senza aver mai vinto un premio! Con ben 18 nomination, Posty ha superato persino Snoop Dogg e continua a dimostrare il suo talento e la sua dedizione. Nonostante non abbia ancora vinto un Grammy, il suo contributo alla musica è indiscutibile',
      //    dataNotizia: '2025.02.17'
      //    //dataNotizia: `${this.today.toISOString().split('T')[0]}`
      //  }).subscribe(data => {
      //    console.log(data)
      //  })
  }


  private convertDateFormat(date: string): string {
    return date.replace(/-/g, '.');
  }

  

  // inserisciNotizia(){
  //   this.firebase.insertNotizia('https://nex-progetto-default-rtdb.firebaseio.com/notizie.json', {
  //     titolo: 'Titolo della notizia',
  //     descrizione: 'Descrizione della notizia'
  //   })
  // }
}


