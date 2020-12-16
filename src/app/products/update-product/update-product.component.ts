import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId=0;
  productDetails:Product;
  
  constructor(private router:Router,private productsService:ProductsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;

      this.productsService.viewProduct(this.productId).subscribe(data=>{
        this.productDetails=data; //getting the existing data of the product
      })
    });
  }
  updateProduct(form){

    let newProduct={
      id: this.productId, //this is the current id of the porduct
      name: form.value.product_name,
      categoryId: form.value.product_categoryId,
      description: form.value.product_description,
      productImg: this.productDetails.productImg,
      price:form.value.product_price,
     isAvailable:form.value.product_availability,
      rating: form.value.product_rating,
      reviews: form.value.product_reviews,
      color: form.value.product_color
     };

    this.productsService.updateProduct(this.productId,newProduct).subscribe(data=>{
      console.log("updated data");
       console.log(data);

      this.router.navigate(['/products/product/'+this.productId]);
    })
  }

}
