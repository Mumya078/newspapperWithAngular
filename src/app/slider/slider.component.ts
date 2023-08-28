import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  constructor(private newsService:NewsService) {
  }
  results:any;
  ngOnInit() {
    this.newsService.sharedResults.subscribe((data: any) => {
      this.results=this.newsService.results;
      console.log(this.results);
    });
  }
}
