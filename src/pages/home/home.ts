import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from './categoryService';
import { Category } from './Category';
import { INTERVIEW_APP_CONFIG, INTERVIEW_APP_DI_CONFIG } from './categoryService';
import { SubCategoryPage } from '../pages';
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
  
  openSubCategoryPage($event, category){
    console.log("openSubCategoryPage");
    this.navCtrl.push(SubCategoryPage, category);
    console.log("openSubCategoryPage");
  }
 
 getCategories() {
   this.categoryService.getCategories()
                  .subscribe(
                    (categories) => { 
                      this.categories = categories;
                      console.log(this.categories);
                      this.categories.forEach(element => {
                        switch (element.name.toLowerCase()){
                          case "javascript":
                            element.iconName = "logo-javascript";
                            break;
                          case ".net":
                            element.iconName = "logo-windows";
                            break;
                          case "package managers":
                            element.iconName = "ios-cube";
                            break;
                          case "design, architecture":
                            element.iconName = "md-bulb";
                            break;
                          case "databases":
                            element.iconName = "ios-cube-outline";
                            break;
                          case "data structure and alogrithms":
                            element.iconName = "git-compare";
                            break;
                          case "html, css":
                            element.iconName = "logo-html5";
                            break;
                           case "cloud computing":
                            element.iconName = "cloud";
                            break;
                          case "source control, build and automation":
                            element.iconName = "ios-cog";
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
