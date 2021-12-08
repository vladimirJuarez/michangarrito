import { Component, OnInit } from '@angular/core';
import { ProductDTO, CreationProductDTO } from '../product';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  products: ProductDTO[];
  columnsToShow = ['productId','name', 'modelYear', 'actions'];

  ngOnInit(): void {
    
/*
    this.productService.GetProductById(1)
    .subscribe(response => {
      if(response.isSuccess){
        console.log(response.result);
      }
      else{
        console.log("Product was not found");
      }
    }, error => console.error(error));
    
    var newProduct: CreationProductDTO = {
      productName: "Stove",
      modelYear: 2018
    };

    this.productService.CreateProduct(newProduct)
    .subscribe(response => {
      if(response != null){
        console.log(response);
        console.log("Product was created");
      }
      else{
        console.log("Product was not created");
      }
    }, error => console.error(error));

    var existProduct: ProductDTO = {
      idProduct: 6,
      productName: "Washing machine",
    };

    this.productService.UpdateProduct(existProduct)
    .subscribe(response => {
      if(response != null){
        console.log(response);
        console.log("Product was updated");
      }
      else{
        console.log("Product was not updated");
      }
    }, error => console.error(error));*/
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts()
    .subscribe(response =>{
      if(response.isSuccess){
        this.products = <ProductDTO[]>response.result;
        console.log(this.products);
      }
      else{
        console.log("products were not found");
      }
    },
    error => console.error(error));
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .subscribe(response => {
      if(response != null){
        this.getAllProducts();
        console.log(response);
        console.log("Product was removed");
      }
      else{
        console.log("Product was not removed");
      }
    }, error => console.error(error));
  }

}
