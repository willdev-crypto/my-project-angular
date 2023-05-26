import { Component, } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent {
  quantidade: number = 0

  constructor(){}
  adicionar(){
    this.quantidade += 1
  }
decrementar(){
  this.quantidade -=1
}
}
