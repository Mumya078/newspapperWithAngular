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
  country:any="tr";
  category:any=this.newsService.catValue;


  constructor(private newsService:NewsService,) {
  }
  ngOnInit() {
    if (this.newsService.isTermEmpty==true){
      this.updateData();
    }
    this.newsService.getData();
    this.newsService.sharedResults3.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

  changeCountry(event:any){
    this.newsService.countryValue = event.target.id;
    this.country = event.target.id; // Kategoriyi güncelle
    this.newsService.getData();
    console.log(this.country);
    this.updateData()

  }
  changeCategory(event:any){
    this.newsService.catValue = event.target.id;
    this.category = event.target.id; // Kategoriyi güncelle
    this.newsService.getData();
    console.log(this.category);
    this.updateData()
  }

  updateData(){
    this.newsService.sharedResults2.subscribe((data: any) => {
      this.results = data;
    });
  }

}
