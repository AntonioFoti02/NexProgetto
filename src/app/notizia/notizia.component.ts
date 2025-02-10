import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servizi/firebase.service';
import { CalendarioComponent } from '../calendario/calendario.component';


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

  descrizione: string = 'Descrizione della notizia'
  foto: string = 'Foto della notizia'
  dataNotizia: string = 'Data della notizia'

  notizia: Notizia = { descrizione: '', foto: '', dataNotizia: '' }

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    
    // Esempio di prova di come prendere dati dal database
     this.firebase.getNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json')
     .subscribe((data: any) =>{
       this.notizia = Object.keys(data).map(key => data[key])[1]
       console.log(this.notizia)
    })


    // Esempio di prova di come insetrire dati nel database
    //  this.firebase.insertNotizia('https://nexprogetto-3c4aa-default-rtdb.europe-west1.firebasedatabase.app/notizie.json', 
    //  {
    //    foto: 'foto', descrizione: 'Descrizione della notizia',
    //    dataNotizia: 'Data notizia'
    //  }).subscribe(data => {
    //    console.log(data)
    //  })
  }


  
  

  // inserisciNotizia(){
  //   this.firebase.insertNotizia('https://nex-progetto-default-rtdb.firebaseio.com/notizie.json', {
  //     titolo: 'Titolo della notizia',
  //     descrizione: 'Descrizione della notizia'
  //   })
  // }
}
