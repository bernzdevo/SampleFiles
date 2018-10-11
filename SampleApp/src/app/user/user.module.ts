import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RequestModule } from '../request/request.module';

@NgModule({
  imports: [
    CommonModule,
    RequestModule
  ],
  declarations: [UserComponent],
  exports:[UserComponent]
})
export class UserModule { }
