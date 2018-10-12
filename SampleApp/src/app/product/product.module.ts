import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RequestModule } from '../request/request.module';
import { ProductInfoComponent } from './productInfo/productInfo.component';
import { ProductService } from '../services/product.service';
//Import FormsModule
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';
import { DiscountedPipe } from '../pipes/discounted.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { SampleDirective } from '../directives/sample.directive';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from '../guards/admin.guard';
import { AuthService } from '../services/auth.service';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const appRoutes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'}, 
  {path:'home',component:HomeComponent}, 
  {path:'users/:id',component:UserComponent},
  {path:'admin',component:AdminComponent,canActivate:[AdminGuard]},   
  {path:'products',component:ProductComponent},
  {path:'products/create',component:CreateComponent},
  {path:'products/edit/:id',component:EditComponent},
  {path:'**',component:UserComponent} 
];



@NgModule({
  imports: [
    CommonModule,
    RequestModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    //import FormsModule
  ],
  declarations: [
    ProductComponent,
    HomeComponent,
    AdminComponent,
    ProductInfoComponent,
    DiscountedPipe,
    FilterPipe,
    SampleDirective,
    CreateComponent,
    EditComponent

  ],
  providers:[AuthService],
  exports:[ProductComponent,ProductInfoComponent]
})
export class ProductModule { }
