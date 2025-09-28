import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from "../../service/article-fictif.service"

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  products: Product[] = [];
  Math = Math;
  

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts()
    .subscribe((response: Product[]) => {
    this.products = response;
    console.log(this.products)
    })
  }

}
