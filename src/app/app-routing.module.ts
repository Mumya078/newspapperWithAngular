import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {HomeComponent} from "./home/home.component";
import {CategorypageComponent} from "./categorypage/categorypage.component";

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'category',component:CategorypageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
