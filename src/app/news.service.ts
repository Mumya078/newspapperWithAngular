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
  public selectedPage=1;
  private sharedResults:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

getNews(){
    const apiKey='cf175920c7be4780a2707e5871d31572';
    const url=`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`;

  this.http.get(url)
    .subscribe(response => {
      this.results = response;
      this.sharedResults.next(this.results)
    });
}
getResults():Observable<any>{
  let index=(this.selectedPage-1)*this.productsPerPage;
    return this.sharedResults.asObservable()
}
}
