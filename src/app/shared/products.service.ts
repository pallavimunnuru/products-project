import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from './product.interface';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProduct() : Observable<any> {
      return this.http.get('assets/product.json');
        
    }
}
