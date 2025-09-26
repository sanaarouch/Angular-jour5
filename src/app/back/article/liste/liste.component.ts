import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../../service/article-fictif.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  products: Product[] = [];
  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts()
    .subscribe((response : Product[]) =>{
      this.products = response;
    })
  }

}
