import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseDTO } from '../utilities/responseDTO';
import { CreationProductDTO, ProductDTO } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;

  public getAllProducts(): Observable<ResponseDTO>{
    return  this.http.get<ResponseDTO>(this.apiURL);
  }

  public getProductById(id: number): Observable<ResponseDTO>{
    return this.http.get<ResponseDTO>(`${this.apiURL}/${id}`);
  }

  public createProduct(product: CreationProductDTO){
    return this.http.post(this.apiURL, product);
  } 

  public updateProduct(product: ProductDTO){
    return this.http.put(this.apiURL, product);
  }

  public deleteProduct(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
