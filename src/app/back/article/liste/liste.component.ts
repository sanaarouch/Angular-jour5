import { Component, OnInit } from '@angular/core';
import { ArticleFictifService} from'../../../service/article-fictif.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  articles;
  constructor(private service : ArticleFictifService) { }

  ngOnInit(): void {
    this.service.getAllArticles()
    .subscribe((response : Response) =>{
      this.articles = response;
    })
  }

}
