import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from './base-url';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    const url = `${BASE_URL}/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id: string) {
    const url = `${BASE_URL}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
