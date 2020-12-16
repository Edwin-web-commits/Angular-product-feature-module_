import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/side-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  
  productsList:Product;
  searchCategory:Category;
  
  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
     
      
      this.searchCategory=data.id;
    
      this.productsService.searchCategoryProduct(this.searchCategory).subscribe(data=>{
       this.productsList=data;
      });

    });
  }

}
