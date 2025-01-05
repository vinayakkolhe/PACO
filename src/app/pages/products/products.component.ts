import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsServics } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(activatedRoute: ActivatedRoute, productService:ProductsServics) {
    // var courseId = activatedRoute.snapshot.params["id"];
    // this.Product = productService.getProductDetails(courseId);

    activatedRoute.paramMap.subscribe(param=>{
      var courseId = activatedRoute.snapshot.params["id"];
      this.Product = productService.getProductDetails(courseId);

    })
  }

  public Product?: Product
}
