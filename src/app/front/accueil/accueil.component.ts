import { Component, OnInit } from '@angular/core';
import {ArticleFictifService} from "../../service/article-fictif.service"

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles ;
  

  constructor(private service: ArticleFictifService) { }

  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response : Response) => {
    this.articles = response;
    console.log(this.articles)
    })
  }

}
