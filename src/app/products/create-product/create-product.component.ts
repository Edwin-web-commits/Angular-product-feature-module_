import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

   genId=Math.floor(Math.random() * 100) + 1;
  constructor(private producstService:ProductsService) { }

  ngOnInit(): void {
  }
  addNewProduct(form){
   let newProduct={
    id: this.genId, //this will be auto generated and unique.For now we just asigned a dummy number
    name: form.value.product_name,
    categoryId: form.value.product_category,
    description: form.value.product_description,
    productImg: form.value.imagePath,
    price:form.value.product_price,
   isAvailable:form.value.product_availability,

    rating: form.value.product_rating,
    reviews: form.value.product_reviews,
    color: form.value.product_color
   };
   console.log(newProduct);
   this.producstService.createProduct(newProduct).subscribe(data=>{
     console.log(data);
   })
  }

}
