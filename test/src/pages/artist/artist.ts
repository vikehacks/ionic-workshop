import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html'
})
export class ArtistPage {

	name: string;
	//name = ''

	stats = {
		url: '',
		follower_count: 0,
		popularity: 0,
		image_url:''
	}

	popular_color: string;

	images: string[];
	genres: string[];
	//images = []

	artist = {
		name:''
	}


  	constructor(public navCtrl: NavController, public http: Http) {
  	}

	handleForm() {
		console.log(encodeURI(this.artist.name));
		//console.log("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA8Kn-De7njoRKoRxF0YvT_OxkKInYny2g&?q="+this.artist.name)
		

		this.http.get("https://api.spotify.com/v1/search?q="+encodeURI(this.artist.name)+"&type=artist").map(res => res.json()).subscribe(
		    data => {
		        let temp: any = data.artists.items[0];
		        this.stats.url = temp.external_urls.spotify;
		        this.stats.follower_count = temp.followers.total;
		        this.stats.popularity = temp.popularity;
		        this.stats.image_url = temp.images[0].url;

		        this.genres = temp.genres;

		        if(this.stats.popularity > 75){
		        	this.popular_color = "green";
		        } else if (this.stats.popularity>50){
		        	this.popular_color="yellow";
		        } else {
		        	this.popular_color = "red";
		        }



		    },
		    err => {
		        console.log("Oops!");
		});

	}

}
