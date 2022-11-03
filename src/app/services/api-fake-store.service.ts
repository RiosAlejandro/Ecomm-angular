import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiFakeStoreService {

  constructor( private http: HttpClient ) { }

  getProductos(): Observable<Data[]>{
    const dataApi = this.http.get<Data[]>('https://fakestoreapi.com/products');
    return dataApi;
  }

  getElectronics(): Observable<Data[]>{
    const dataElectronics = this.http.get<Data[]>('https://fakestoreapi.com/products/category/electronics');
    return dataElectronics;
  }

  getJewelery(): Observable<Data[]>{
    const dataJewelery = this.http.get<Data[]>('https://fakestoreapi.com/products/category/jewelery');
    return dataJewelery;
  }

  getMen(): Observable<Data[]>{
    const dataMen = this.http.get<Data[]>(`https://fakestoreapi.com/products/category/men's%20clothing`);
    return dataMen;
  }

  getWomen(): Observable<Data[]>{
    const dataWomen = this.http.get<Data[]>(`https://fakestoreapi.com/products/category/women's%20clothing`);
    return dataWomen;
  }
}
