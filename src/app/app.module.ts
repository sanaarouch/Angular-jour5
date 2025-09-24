import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { ArticleFictifService} from "./service/article-fictif.service";
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
  

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path : "" , component: AccueilComponent} , // page d'accueil
      {path : "article/:id" , component: ArticleComponent} ,
      {path : "admin/article/liste" , component : ListeComponent} ,
      {path : "admin/article/ajouter" , component : AjouterComponent} ,
      {path : "admin" , component : DashboardComponent} ,//admin apres
      {path : "**" , component: NotFoundComponent} , // not found tjr à la fin
     
    ])
  ],

  providers: [ArticleFictifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
