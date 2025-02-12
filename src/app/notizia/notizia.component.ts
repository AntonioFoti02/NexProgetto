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

  // Oggetto di tipo Notizia
  notizia: Notizia = { descrizione: '', foto: '', dataNotizia: '' }

  // Array di oggetti di tipo Notizia
  notizie: Notizia[] = []

  constructor(private firebase: FirebaseService, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    // Prende la data dal servizio di condivisione dati
    this.dataSharingService.currentDataCalendario.subscribe(dataCalendario => {
      // Formatta la data come 'YYYY.MM.DD'
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

     
    // Inserisce i dati nel database
        //  this.firebase.insertNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json', 
        //  {
        //    foto: 'https://i.pinimg.com/736x/d5/16/b6/d516b6f0820a54a02ab9f39b5f3eb9e9.jpg',
        //    descrizione: '21 Savage è un rapper britannico che ha raggiunto la fama grazie al suo stile unico e alle sue liriche taglienti. Nato a Londra nel 1992, ha trascorso gran parte della sua vita a Atlanta, dove ha iniziato a fare musica e a farsi conoscere nel mondo dell\'hip hop. Con il suo album di debutto "Issa Album", ha dimostrato di essere un artista di talento e di avere molto da dire. La sua musica è cruda, autentica e riflette la sua esperienza di vita. Con brani come "Bank Account" e "A Lot", ha dimostrato di essere uno dei rapper più interessanti della sua generazione. Nonostante non abbia ancora vinto un Grammy, il suo contributo alla musica è indiscutibile.',
        //    dataNotizia: '2025.02.17'
        //    //dataNotizia: `${this.today.toISOString().split('T')[0]}`
        //  }).subscribe(data => {
        //    console.log(data)
        //  })
  }

  // Metodo per convertire la data nel formato 'YYYY.MM.DD'
  private convertDateFormat(date: string): string {
    return date.replace(/-/g, '.');
  }

}


