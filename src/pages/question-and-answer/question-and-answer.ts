import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the QuestionAndAnswer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-question-and-answer',
  templateUrl: 'question-and-answer.html'
})
export class QuestionAndAnswerPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello QuestionAndAnswerPage Page');
  }

}
