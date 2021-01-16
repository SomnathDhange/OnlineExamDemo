import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['name', 'discountper', 'discountPrice', 'originalPrice', 'tags', 'color','action'];
  dataSource: ProductModel[] = [];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.GetAllProdcut();
  }

  GetAllProdcut() {
    this.productService.GetAllProduct().subscribe((products: ProductModel[]) => {
      this.dataSource = products;
      console.log(products)
    });
  }

  deleteProductHandler(){
    
  }
}
