import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Valor do pulso PWM. 
   */
  i: number = 0;

  constructor(public navCtrl: NavController) {

  }

  resetOnBlur() {
    this.i=0;
  }

}
