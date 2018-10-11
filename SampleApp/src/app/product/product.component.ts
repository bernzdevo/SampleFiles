import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { ProductService } from '../services/product.service';


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

  constructor(private prodService: ProductService) { }
  productList: any;
  ngOnInit() {
    this.GetProducts();
  }

  prodInfo = {};
  SubmitProduct(passedProduct) {
    console.log("Submitting! " + passedProduct);
    
    this.prodService.CreateProduct(passedProduct).subscribe(
      (success) => {
        console.log("Success!");
      },
      (error) => {
        console.log("Failed!");
      });
    this.GetProducts();
  }


  prodInfoEdit={};
  EditProduct(passedProduct){
    console.log("Edit Product!"+passedProduct.productName);
    this.prodInfoEdit = passedProduct;
  }
  SubmitEditProduct(editedProduct){
    console.log("Product Edited!" + editedProduct.id);
    this.prodService.UpdateProduct(editedProduct).subscribe(
      (success)=>{ console.log(success);},
      (error)=>{ console.log(error);}
    );
    
  
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
