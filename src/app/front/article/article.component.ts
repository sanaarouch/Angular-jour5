import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService, Product } from "../../service/article-fictif.service"

@Component({
  selector: 'app-product',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;
  
  constructor(
    private router : ActivatedRoute,
    private service : ProductService)
    {}

  ngOnInit(): void {
   
    this.router.paramMap.subscribe((params) =>{
      console.log(params)
      const id = params.get("id");
      console.log(id)
      this.service.getProductById(id!)
      .subscribe( (response : Product) => {
      this.product = response
      console.log(this.product);
    })
 
  })
}

  addToCart() {
    console.log(`Ajout au panier: ${this.quantity} x ${this.product?.title}`);
  }
}

}