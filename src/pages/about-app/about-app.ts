import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AboutApp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
