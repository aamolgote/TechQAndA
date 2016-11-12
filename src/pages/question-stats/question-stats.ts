import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the QuestionStats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question-stats',
  templateUrl: 'question-stats.html'
})
export class QuestionStatsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello QuestionStatsPage Page');
  }

}
