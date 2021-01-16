import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/products/model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  productForm: FormGroup;

  isEditMode: boolean = false;
  isEditId: string;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.isEditId = this.route.snapshot.paramMap.get('id');
    this.isEditId ? this.isEditMode = true : this.isEditMode = false;

    this.ProductFormInit();

    if (this.isEditMode) {
      this.GetProductById(this.isEditId);
    }
  }

  ProductFormInit() {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      discountPer: new FormControl(''),
      discountPrice: new FormControl(''),
      originalPrice: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      color: new FormControl(''),
      tags: new FormControl(''),
      isVisiable: new FormControl(''),
    });
  }

  GetProductById(prodId: string) {
    this.productService.GetProductById(prodId).subscribe(product => {
      this.productForm.patchValue({
        name: product.name,
        discountPer: product.discountPer,
        discountPrice: product.discountPrice,
        originalPrice: product.originalPrice,
        category: product.category,
        color: product.color,
        tags: product.tags,
        isVisiable: product.isVisiable
      });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit() {
    debugger;
    if (this.productForm.invalid) {
      return;
    }

    let product: ProductModel = {
      name: this.productForm.controls.name.value,
      discountPer: this.productForm.controls.discountPer.value,
      discountPrice: this.productForm.controls.discountPrice.value,
      originalPrice: this.productForm.controls.originalPrice.value,
      category: this.productForm.controls.category.value,
      color: this.productForm.controls.color.value,
      tags: this.productForm.controls.tags.value.split(),
      isVisiable: this.productForm.controls.isVisiable.value
    }

    this.isEditMode ? this.updateProduct(product) : this.addProduct(product);
  }
  cancelHandler(){ 
    this.router.navigate(['product']);
  }
  addProduct(product: ProductModel) {
    this.productService.AddProduct(product).subscribe(res => {
      console.log(res);
      this.router.navigate(['product']);
    })
  }

  updateProduct(product: ProductModel) {
    this.productService.UpdateProduct(this.isEditId, product).subscribe(res => {
      console.log(res);
      this.router.navigate(['product']);
    })
  }
}
