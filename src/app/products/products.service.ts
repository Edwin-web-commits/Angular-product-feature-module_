import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product } from './product';
import { Observable } from 'rxjs';
import {Category } from '../side-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
    
  createProduct(productBody):Observable<Product>{
   const productUrl='http://localhost:3000/products';
  
   return this.httpClient.post<Product>(productUrl,productBody); //will return an observable of type Product
  }
  viewProduct(productId):Observable<Product> {
   const productUrl="http://localhost:3000/products/"+productId;
   
    return this.httpClient.get<Product>(productUrl); //will return an observable of type Product
  }
  viewAllProducts():Observable<Product[]>{
  const productUrl='http://localhost:3000/products';
 
    return this.httpClient.get<Product[]>(productUrl); //will return an observable of type Product
  }

  updateProduct(product: Product):Observable<Product> {
    const productUrl="http://localhost:3000/products/"+product.id;

   return this.httpClient.put<Product>(productUrl,product);//will return an observable of type Product
  }
  deleteProduct(productId):Observable<Product> {
   const productUrl="http://localhost:3000/products/"+productId;
  
  return  this.httpClient.delete<Product>(productUrl); //will return an observable of type Product
  }
  searchCategoryProduct(categoryId):Observable<Product> {
    const productUrl="http://localhost:3000/products?categoryId="+categoryId;
   
   return this.httpClient.get<Product>(productUrl); //will return an observable of type Product
  }
  searchDateProduct(dateParam):Observable<Product> {
    const productUrl="http://localhost:3000/products/date="+dateParam ;

   return this.httpClient.get<Product>(productUrl); //will return an observable of type Product
  }
  getCategories():Observable<Category> {
    const categoryUrl='http://localhost:3000/categories';
    
    return this.httpClient.get<Category>(categoryUrl); //will return an observable of type Product
  }
}
