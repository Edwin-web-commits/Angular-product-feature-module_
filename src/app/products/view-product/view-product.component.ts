import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
 productId=0;
 selectedProduct:Product;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id ;

      this.productsService.viewProduct(this.productId).subscribe(data=>{
        console.log("my data");
        console.log(data);
       this.selectedProduct=data;
       console.log("selected product");
       console.log(this.selectedProduct.productImg);
      })
          })
  }
  updateItem(){
   this.router.navigate(['/products/update-product/'+this.productId]);
  }
  deleteItem(){
    confirm("Delete this item?");
    this.productsService.deleteProduct(this.productId).subscribe(data=>{
    
      this.router.navigate(['/products']);
    });
    
  }

}
