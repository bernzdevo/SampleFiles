import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../models/productmodels';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private prodService: ProductService,
    private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  //REACTIVE FORM
  prodForm = this.formBuilder.group({
    productName: ['', [Validators.required, Validators.maxLength(10)]],
    productPrice: ['', Validators.required],
    expirationDate: ['', Validators.required]
  });
  Submit() {
    console.log(this.prodForm.value);
    console.log(this.prodForm.controls);
    this.prodService.CreateProduct(this.prodForm.value).subscribe(
      (success) => {
        console.log("Success!");
      },
      (error) => {
        console.log("Failed!");
      });
      this.router.navigate(['products']);
  }

  //prodInfo = {};
  prodInfo:Products = new Products();
  SubmitProduct(passedProduct) {
    console.log("Submitting! " + passedProduct);

    this.prodService.CreateProduct(passedProduct).subscribe(
      (success) => {
        console.log("Success!");
      },
      (error) => {
        console.log("Failed!");
      });
      this.router.navigate(['products']);
  }

}
