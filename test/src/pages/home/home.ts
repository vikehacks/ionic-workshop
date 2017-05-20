import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	artist = {}

  	constructor(public navCtrl: NavController, public http: Http) {

  	}

	handleForm() {
		console.log(this.artist)
	}

}
