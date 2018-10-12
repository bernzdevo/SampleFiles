import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { ProductService } from '../services/product.service';
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  SomeValue: string = "Value from Product Component";
  Message: string = "This is from Parent";
  recieveData(data) {
    this.Message = data;
  }

  constructor(private prodService: ProductService,private router: Router) {
  }

  searchT:string;
  fby:string;
  productList: any;
  ngOnInit() {
   this.GetProducts();
  }
  prodInfoEdit = {};
  EditProduct(passedProduct) {
    console.log("Edit Product!" + passedProduct.productName);
    this.prodInfoEdit = passedProduct;
    this.router.navigate(['products/edit',passedProduct.id]);
  }

  GetProducts() {
    //USING PROMISE
    // this.prodService.ReadData().then(
    //   //Success
    //   (data) => {
    //     this.productList = data;
    //   },
    //   //Failed
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    //USING OBSERVABLE
    this.prodService.ReadProduct().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
