import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionAndAnswerService } from './questionandanswerservice';
import { QuestionAndAnswer } from './questionandanswer';
@Component({
  selector: 'page-question-and-answer',
  templateUrl: 'question-and-answer.html',
  providers: [QuestionAndAnswerService]
})
export class QuestionAndAnswerPage {
  category: any;
  questionAndAnswerId: number;
  questionAndAnswer: QuestionAndAnswer;
  questionCount: number;
  constructor(public navCtrl: NavController, private navParams: NavParams, private questionAndAnswerService: QuestionAndAnswerService) {
    this.category = this.navParams.data;
    console.log(this.navParams);
    console.log(this.category);
     this.questionCount = 1;
     
  }

  ionViewDidLoad() {
    console.log("QuestionAndAnswerPage Page");
  }
  
  ngOnInit() {
    this.getQuestionAndAnswer();    
  }
  
  ngOnDestroy(){
   
  }
  
  getQuestionAndAnswer() {
    this.questionAndAnswerId = this.questionCount;
    this.questionAndAnswerService.getQuestionAndAnswer(this.category.Id, this.questionAndAnswerId)
      .subscribe(
      questionAndAnswer => {
        this.questionAndAnswer = questionAndAnswer;
        console.log("Question and Answer:" + this.questionAndAnswer);
      },
      error => this.questionAndAnswer = <any>error
      );
  };
  
  nextQuestion(){
      this.questionCount++;
      this.getQuestionAndAnswer();
  }
  
  previousQuestion(){
      this.questionCount--;
      this.getQuestionAndAnswer();
  }

}
