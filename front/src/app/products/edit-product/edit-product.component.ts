import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private router: Router,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute) { }

  model: ProductDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.productService.getProductById(params.id)
      .subscribe(response =>{
        if(response.isSuccess){
          
          this.model = <ProductDTO>response.result;
          console.log(this.model);
        }
        
      },() => this.router.navigate(['/']));
    });
  }

  saveChanges(product: ProductDTO){
    product.productId = this.model.productId;
    this.productService.updateProduct(product)
    .subscribe(() =>{
      this.router.navigate(['/']);
    }, error => console.error(console.error()));
  }

}
