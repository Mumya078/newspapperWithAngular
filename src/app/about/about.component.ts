import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsService} from "../news.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  lastSegment:string="";
  constructor(private route: ActivatedRoute,
              private newService:NewsService) {
  }

  ngOnInit() {

  }
}
