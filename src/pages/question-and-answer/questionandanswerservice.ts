import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { QuestionAndAnswer } from './questionandanswer';
import { Observable } from 'rxjs/Observable';
import '../../app/rxjs-operators';

@Injectable()
export class QuestionAndAnswerService {
    questionAndAnswerServiceUrl: string;
    constructor(private http: Http) {
        this.questionAndAnswerServiceUrl = 'http://interviewapp.cloudapp.net/api/QuestionAndAnswer/';
    }

    getQuestionAndAnswer(category: number, id: number): Observable<QuestionAndAnswer> {
        var apiUrl = this.questionAndAnswerServiceUrl + category + '/' + id;
        return this.http.get(apiUrl)
            .map(this.extractQuestionAndAnswer)
            .catch(this.handleError);
    }
    private extractQuestionAndAnswer(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        return Observable.throw(errMsg);

    }
}


