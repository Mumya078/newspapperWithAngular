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
  public productsPerPage=10;
  category:string="";
  countryValue:any;
  catValue:any;

  public sharedResults:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public sharedResults2:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

getNews(){
    const apiKey='199cd040cce6414499b1a0aa7a48ab1d';
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  this.http.get(url)
    .subscribe(response => {
      this.results = response;
      this.sharedResults.next(this.results);
    });
}
  getFiltredNews(catValue:string,countryValue:string):Observable<any>{
    const apiKey='199cd040cce6414499b1a0aa7a48ab1d';
    const url=`https://newsapi.org/v2/top-headlines?country=${countryValue}&category=${catValue}&apiKey=${apiKey}`;
    this.catValue=catValue;
    this.countryValue=countryValue;
    this.http.get(url)
      .subscribe(response => {
        this.results = response;
        this.sharedResults2.next(this.results);
      });
    return this.http.get(url);
  }
  getResultsForPage(pageNumber: number): any[] {
    let index = (pageNumber - 1) * this.productsPerPage;
    return this.results?.articles.slice(index, index + this.productsPerPage);
  }


}
