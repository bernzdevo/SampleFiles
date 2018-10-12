import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/productmodels';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private prodService: ProductService,
    private route: ActivatedRoute,private router:Router) { }

  id: number;
  //prodInfoEdit = {};
  prodInfoEdit :Products = new Products();
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.GetProduct(this.id);
    });

  }

  GetProduct(id){
      this.prodService.ReadProductById(id).subscribe((data:Products)=>{
        this.prodInfoEdit=data;
      },(error)=>{
        console.log(error);
      });
  }

  SubmitEditProduct(editedProduct) {
    console.log("Product Edited!" + editedProduct.id);
    this.prodService.UpdateProduct(editedProduct).subscribe(
      (success) => { console.log(success); },
      (error) => { console.log(error); }
    );
    this.router.navigate(['products']);
  }
}
