import {Component, OnInit} from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  results:any;
  displayedItems: any[] = [];
  currentPage = 1;
  totalPages = 1;
  pages:number[]=[];
  constructor(private newsService:NewsService) {
  }
  ngOnInit() {
    this.newsService.getNews();
    this.newsService.sharedResults.subscribe((data: any) => {
      this.totalPages = Math.ceil(data?.articles.length / this.newsService.productsPerPage);
      this.updateDisplayedItems();
      this.generateArray();
    });
  }

  updateDisplayedItems() {
    this.displayedItems = this.newsService.getResultsForPage(this.currentPage);
  }

  changePage(number:number){
    this.currentPage=number;
    this.updateDisplayedItems();
  }

  generateArray() {
    if (!isNaN(this.totalPages) && this.totalPages >= 0) {
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
    }
  }
}
