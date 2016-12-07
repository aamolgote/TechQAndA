import { Injectable, Inject } from '@angular/core';
import { Http, Response} from '@angular/http';
import { OpaqueToken } from '@angular/core';

import {Category} from './category';
import {Observable} from 'rxjs/Observable';
import '../../app/rxjs-operators'; 

export let INTERVIEW_APP_CONFIG = new OpaqueToken('app.config');
export interface ApplicationConfiguration{
    apiEndPoint : string,
    timeOut: number
}

export const INTERVIEW_APP_DI_CONFIG: ApplicationConfiguration = {
  apiEndPoint: 'http://techqandawebapi.azurewebsites.net/api/category',
  timeOut: 20
};


@Injectable()
export class CategoryService {
    categoryServiceUrl :string;
    constructor(private http: Http, @Inject(INTERVIEW_APP_CONFIG) config: ApplicationConfiguration){
        console.log(config.apiEndPoint);
        this.categoryServiceUrl = config.apiEndPoint;
    }
       
    getCategories (): Observable<Category[]>{
        console.log("Get Categories");
        return this.http.get(this.categoryServiceUrl)
                        .retry(4)
                        .map(this.extractCategoryData)
                        .catch(this.handleError);
                        
    } 
    
    private extractCategoryData(res: Response){
        let body = res.json();
        return body || { };
    }
    
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : 
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
  }
}