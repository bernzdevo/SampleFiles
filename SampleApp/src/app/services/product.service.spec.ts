import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule,ReactiveFormsModule,FormsModule],
    providers:[ProductService]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
