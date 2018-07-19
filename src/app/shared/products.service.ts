import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from './product.interface';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 private source = new BehaviorSubject<any>(0);
navItem$ = this.source.asObservable();

  constructor(private http: HttpClient) { }
  getProduct() : Observable<any> {
      return this.http.get('assets/product.json');
        
    }


     changeNav(any) {
    this.source.next(any);
  }
}
