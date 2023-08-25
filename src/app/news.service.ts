import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  results:any;
  private sharedResults:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

getNews(){
    const apiKey='cf175920c7be4780a2707e5871d31572';
    const url=`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`;

  this.http.get(url)
    .subscribe(response => {
      this.results = response;
      this.sharedResults.next(this.results)
      console.log(this.results);
    });
}
getResults():Observable<any>{
    return this.sharedResults.asObservable()
}
}
