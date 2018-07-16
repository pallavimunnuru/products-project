import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { Product } from '../shared/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  pro: Product[];
  proValue: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {

    this.loadProduct();
  }

  loadProduct() {
    this.productsService.getProduct().subscribe(data => {
      console.log(data);
      this.pro = data.product
    });

  }

}