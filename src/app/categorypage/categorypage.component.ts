import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";
import {TopbarComponent} from "../topbar/topbar.component";

@Component({
  selector: 'categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.scss']
})
export class CategorypageComponent implements OnInit{
  results:any;
  country:any="us";
  category:any=this.newsService.category;


  constructor(private newsService:NewsService,) {
  }
  ngOnInit() {
    this.getData();
  }

  changeCountry(event:any){
    this.country=event.target.id;
    this.getData()
  }
  changeCategory(event:any){
    this.category=event.target.id;
    this.getData()
  }

  getData(){
    this.newsService.getFiltredNews(this.category,this.country).subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

}
