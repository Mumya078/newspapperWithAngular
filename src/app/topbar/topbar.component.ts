import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewsService } from '../news.service';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  category:string="";
  showDiv: boolean = false;
  searchQuery: string = '';
  filteredList: any[] = []; // YourItemType listenizin öğe tipine göre değiştirilmeli

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
        this.showDiv = lastSegment !== 'category';
      });
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
      this.newsService.category=this.category;
      console.log(this.newsService.category);
    }

  protected readonly event = event;}
