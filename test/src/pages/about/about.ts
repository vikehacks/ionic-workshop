import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	time: Date;
	interval: number;

  constructor(public navCtrl: NavController) {

  }

  getTime() {
  	this.time = new Date();
  	this.interval = setInterval(()=> this.time = new Date(), 1000);

  }

  stopTime() {
  	this.time = new Date()
  	clearInterval(this.interval)
  }

}
