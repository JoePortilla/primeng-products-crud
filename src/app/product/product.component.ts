import {Component} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProductList();
  }

  private getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        // console.log(response);
        this.products = response;
      });
  }
}
