import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreationProductDTO } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private router: Router,private productService: ProductsService) { }

  ngOnInit(): void {
  }

  saveChanges(product: CreationProductDTO){
    console.log(product);
    this.productService.createProduct(product)
    .subscribe(() => {
      this.router.navigate(['/']);
    }, error => console.error(error));
  }

}
