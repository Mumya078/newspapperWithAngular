import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

    constructor(private router:Router) {
    }

    toggleRoute(): void {
        const currentUrl = this.router.url;

        if (currentUrl.includes('home')) {
            this.router.navigate(['/categories']);
        } else if (currentUrl.includes('categories')) {
            this.router.navigate(['/home']);
        }
    }
}
