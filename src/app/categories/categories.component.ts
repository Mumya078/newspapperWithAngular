import { Component } from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  category:any=""
  term:string="";
  constructor(private newsService:NewsService) {
  }
  setCategory(event:any){
    this.category=event.currentTarget.getAttribute("data-value");
    this.newsService.catValue=this.category;
    console.log(this.newsService.category);
  }

}
