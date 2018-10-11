import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SampleApp';

  //Dependency Injection
  constructor(private prodService: ProductService) {

  }

  ngOnInit() {
    //Invoke sampleFunction() from ProductService
    // this.prodService.sampleFunction().then(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

}
