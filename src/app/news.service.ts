import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  results:any;
  public productsPerPage=10;
  category:string="";

  countryValue:any="tr";
  catValue:any;

  filtred:any;

  public sharedResults:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public sharedResults2:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public sharedResults3:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient
  ) { }

getNews(){
    const apiKey='e1fa4b99908040e8ac980138b68274c0';
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  this.http.get(url)
    .subscribe(response => {
      this.results = response;
      this.sharedResults.next(this.results);
    });
}
  getFiltredNews(catValue:string,countryValue:string):Observable<any>{
    const apiKey='e1fa4b99908040e8ac980138b68274c0';
    const url=`https://newsapi.org/v2/top-headlines?country=${countryValue}&category=${catValue}&apiKey=${apiKey}`;
    this.catValue=catValue;
    this.countryValue=countryValue;
    return this.http.get(url);
  }
  getResultsForPage(pageNumber: number): any[] {
    let index = (pageNumber - 1) * this.productsPerPage;
    return this.results?.articles.slice(index, index + this.productsPerPage);
  }
  getData(){
    this.getFiltredNews(this.catValue, this.countryValue).subscribe((data: any) => {
      this.results = data;
      this.sharedResults2.next(this.results);
    });
  }

  getNewsWithSearch(term:string) {
    if (term!==""){
      const apiKey = 'e1fa4b99908040e8ac980138b68274c0';
      const url = `https://newsapi.org/v2/top-headlines?q=${term}&apiKey=${apiKey}`;
      this.http.get(url).subscribe(response =>{
        this.filtred=response;
        this.sharedResults3.next(this.filtred);
      })
    }
    else {
      this.getData()
    }
  }

}
