import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewsService } from '../news.service';
import { filter } from 'rxjs/operators';
import {THREE} from "@angular/cdk/keycodes";



@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  category:string="";
  showDiv: boolean = false;
  lastSegment:string="";
  term:string="";

    constructor(private router: Router,
                private newsService: NewsService,
                ) {
    }
  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlSegments = event.url.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        if (lastSegment!='home')
        {
          this.showDiv=false;
        }
        else {
          this.showDiv=true;
        }
      });
    this.searchNews();
  }
  toggleRoute(): void {
        const currentUrl = this.router.url;
        if (currentUrl.includes('home')) {
            this.router.navigate(['/categories']);
        } else if (currentUrl.includes('categories')) {
            this.router.navigate(['/home']);
        }else if (currentUrl.includes('category')) {
          this.router.navigate(['/home']);
        }
    }
    setCategory(event:any){
      this.category=event.currentTarget.getAttribute("data-value");
      this.newsService.catValue=this.category;
      console.log(this.newsService.category);
    }

  searchNews() {
    this.newsService.getNewsWithSearch(this.term);
  }


  protected readonly event = event;}
