import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from 'src/app/core/rest-client.service';
import { ProductModel } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly restClient: RestClientService) { }

  GetAllProduct(): Observable<ProductModel[]> {
    return this.restClient.get('products');
  }

  GetProductById(productId: string): Observable<ProductModel> {
    return this.restClient.get('products/' + productId);
  }

  AddProduct(body: ProductModel): Observable<any> {
    return this.restClient.post('products', body);
  }
  UpdateProduct(productId, body: ProductModel): Observable<any> {
    return this.restClient.put('products/' + productId, body);
  }
}
