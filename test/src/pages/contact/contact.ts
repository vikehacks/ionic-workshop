import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	memes: any;
 	constructor(public navCtrl: NavController, public http: Http) {
 		this.getLinks();

	}

  getLinks() {
  	this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(
    data => {
        this.memes = data.data.children;
    },
    err => {
        console.log("Oops!");
    });
  }



}
