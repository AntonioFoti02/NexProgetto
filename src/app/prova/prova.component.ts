import { OnInit } from '@angular/core';

//Aggiunto automaticamente dopo il quickFix
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
// Tutti gli implements dopo OnInit sono stati aggiunti per creare
//  il ciclo di vita del componente
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit,
 AfterViewChecked,AfterViewInit, DoCheck, OnDestroy{
    
    isDisabled = false;

    // Variabile utilizzata per il StringInterpolation (one-way "binding")
    cani = [
      {
        nome: 'Fido',
        razza: 'Golden',
        descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
        from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
        originally bred for hunting.`
      }
    ]

    // Il costruttore crea il singolo Componente anche se ha lo stesso nome 
    // di fatti se richiamo due componenti "prova" sull'HTML il costruttore viene chiamato due volte
    constructor() {
      console.log('costruttore')
    }

    // Tutti i metodi void tranne OnInit sono stati aggiunti con quickFix
    //  cliccando su ProvaComponent dopo l'aggiunta di tutti i Checked e Destroy su implements

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }
    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }
    ngDoCheck(): void {
      console.log('ngDoCheck');
    }
    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }

    ngOnInit(): void {
      console.log("ngOnInit")
      setInterval(()=>{
          this.isDisabled = this.isDisabled
      }, 2000)
    }

    // Metodo per far si che compaia "Ho cliccato" sulla console
    OnClick(){
      console.log('Ho cliccato')
    }
}
