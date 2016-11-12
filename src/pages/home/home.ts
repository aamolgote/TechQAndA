import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from './categoryService';
import { Category } from './Category';
import { INTERVIEW_APP_CONFIG, INTERVIEW_APP_DI_CONFIG } from './categoryService';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CategoryService, { provide: INTERVIEW_APP_CONFIG, useValue: INTERVIEW_APP_DI_CONFIG }]
})
export class HomePage {
  errorMessage: string;
  categories: Category[];
  constructor(public navCtrl: NavController, private categoryService: CategoryService) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }
  
   ngOnInit(){
   this.getCategories();
   console.log("Getting categories");
  } 
 
 getCategories() {
   this.categoryService.getCategories()
                  .subscribe(
                    (categories) => { 
                      this.categories = categories;
                      this.categories.forEach(element => {
                        switch (element.Name.toLowerCase()){
                          case "angular js": 
                            element.iconName = "logo-angular";
                            break;
                          case "node js - npm":
                            element.iconName = "logo-nodejs";
                            break;
                          case "javascript and jquery":
                            element.iconName = "logo-javascript";
                            break;
                          case "core.net":
                            element.iconName = "logo-windows";
                            break;
                          case "linq and ef":
                            element.iconName = "logo-windows";
                            break;
                          case "azure":
                            element.iconName = "cloud";
                            break;  
                          case "html5":
                            element.iconName = "logo-html5";
                            break;  
                          case "web api":
                            element.iconName = "cloud-outline";
                            break;
                          case "nuget":
                            element.iconName = "ios-cube";
                            break;
                          case "asp.net":
                            element.iconName = "ios-globe";
                            break;
                          case "asp.net mvc":
                          case "wcf":
                            element.iconName = "ios-globe-outline";
                            break;
                          case "design and architecture":
                            element.iconName = "grid";
                            break;
                          case "sql server":
                            element.iconName = "ios-cube-outline";
                            break;
                          case "design patterns":
                            element.iconName = "md-bulb";
                            break;
                          case "architecture":
                            element.iconName = "logo-codepen";
                            break;
                          case "data structure":
                            element.iconName = "git-compare";
                            break;
                          default:
                            element.iconName = "happy";
                            break;     
                        }
                      });
                    },
                    error => this.errorMessage = <any>error
                  );
 }

}
