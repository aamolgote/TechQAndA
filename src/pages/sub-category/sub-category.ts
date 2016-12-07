import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubCategoryService } from './subCategoryService';
import { SubCategory } from './SubCategory';
@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
  providers: [SubCategoryService]
})
export class SubCategoryPage {
  category: any;
  subCategories: SubCategory[];
  errorMessage: string;
  constructor(public navCtrl: NavController, private navParams: NavParams, private subCategoryService: SubCategoryService) {
    this.category = this.navParams.data;
    console.log(this.category);
  }

  ionViewDidLoad() {
    console.log('Hello SubCategoryPage Page');
  }

  getSubCategories(categoryId: string){
    this.subCategoryService.getSubCategories(categoryId)
        .subscribe(
                    (subCategories) => { 
                      this.subCategories = subCategories;
                      console.log(this.subCategories);
                      this.subCategories.forEach(element => {
                        

                      });
                    },
                    error => this.errorMessage = <any>error
                  );
  }

  ngOnInit(){
    console.log("Gettting Sub Categories from Init");
    this.getSubCategories(this.category.id)
  }

}
