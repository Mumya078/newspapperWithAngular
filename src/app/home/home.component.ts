import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  results:any;
  constructor(private newsService:NewsService) {
  }
  ngOnInit() {
    this.newsService.getNews()
    this.newsService.getResults().subscribe(data =>{
      this.results=data;
    })
  }


}
