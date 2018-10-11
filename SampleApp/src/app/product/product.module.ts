import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RequestModule } from '../request/request.module';
import { ProductInfoComponent } from './productInfo/productInfo.component';
import { ProductService } from '../services/product.service';
//Import FormsModule
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  imports: [
    CommonModule,
    RequestModule,
    DataTableModule,
    FormsModule //import FormsModule
  ],
  declarations: [
    ProductComponent,
    ProductInfoComponent
  ],
  providers:[],
  exports:[ProductComponent]
})
export class ProductModule { }
