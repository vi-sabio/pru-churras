import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo=1;
  soma=1;

  constructor() {}
  truco(){
    this.valendo=3;

  }
  seis(){
    this.valendo=6;

  }
  nove(){
    this.valendo=9;

  }
  doze(){
    this.valendo=12;
  }

  soma(){
    
  }

}
