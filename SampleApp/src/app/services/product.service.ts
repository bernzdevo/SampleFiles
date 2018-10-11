import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }



  //Using Promises
  ReadData = () => {
    return this.http.get("http://localhost:61363/api/Products").toPromise();
  }

  //Using Observables
  ReadProduct = ()=>{
    return this.http.get("http://localhost:61363/api/Products");
  }

  CreateProduct=(product)=>{
    return this.http.post("http://localhost:61363/api/Products",product);
  }

  //PUT 
  UpdateProduct=(product)=>{
    return this.http.put("http://localhost:61363/api/Products/"+product.id,product);
  }


}
