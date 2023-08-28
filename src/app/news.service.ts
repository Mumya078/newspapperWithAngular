import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  results:any;
  public numb:number=0;
  public productsPerPage=10;

  public sharedResults:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

getNews(){
    const apiKey='cf175920c7be4780a2707e5871d31572';
    const url=`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`;

  this.http.get(url)
    .subscribe(response => {
      this.results = response;
      this.sharedResults.next(this.results);
    });
}

  getResultsForPage(pageNumber: number): any[] {
    let index = (pageNumber - 1) * this.productsPerPage;
    return this.results?.articles.slice(index, index + this.productsPerPage);
  }

}
