import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {  ProductsService} from '../../products/products.service'
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:Category;
  constructor(private router:Router,private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data=>{
      this.categoryList=data;
      console.log(data);
    })
  }


}
