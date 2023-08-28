import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.scss']
})
export class CategorypageComponent implements OnInit{
  results:any;
  value:any="general&";

  constructor(private newsService:NewsService) {
  }
  ngOnInit() {

  }

  pushValue(event:any){
    const isChecked = event.target.checked;
    const category = event.target.value;
    if (isChecked) {
      console.log('Push');
      this.value = this.value + category + '&';
      console.log(this.value);
    } else {
      console.log('pop');
      this.value = this.value.replace(category + '&', '');
      console.log(this.value);
    }

    this.newsService.getFiltredNews(this.value).subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

}
