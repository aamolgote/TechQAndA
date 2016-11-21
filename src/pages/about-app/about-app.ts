import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about-app',
  templateUrl: 'about-app.html'
})
export class AboutAppPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AboutAppPage Page');
  }

}
