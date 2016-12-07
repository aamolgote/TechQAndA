import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { SubCategory } from './subCategory';
import { Observable } from 'rxjs/Observable';
import '../../app/rxjs-operators';

@Injectable()
export class SubCategoryService{
    subCategoryServiceUrl: string;

    constructor(private http: Http){
        this.subCategoryServiceUrl = "http://techqandawebapi.azurewebsites.net/api/";
    }

    getSubCategories(categoryId: string): Observable<SubCategory[]>{
        var subCatgUrl = this.subCategoryServiceUrl + categoryId + "/SubCategory";
        console.log("Get Sub Categories");
        return this.http.get(subCatgUrl)
                        .retry(4)
                        .map(this.extractSubCategoryData)
                        .catch(this.handleError);
    }

    private extractSubCategoryData(res: Response){
        let body = res.json();
        return body || {};
    }

    private handleError(error: any){
        let errMsg = (error.message) ? error.message : 
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}