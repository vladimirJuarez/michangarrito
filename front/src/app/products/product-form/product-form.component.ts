import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreationProductDTO, ProductDTO } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Output()
  OnSubmit: EventEmitter<CreationProductDTO> = new EventEmitter<CreationProductDTO>();

  @Input()
  model: ProductDTO;

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      productName: ['', { validators: [Validators.required] }],
      modelYear: ['', {validators: [Validators.required] }]
    });


    if(this.model !== undefined){
      console.log(this.model);
      this.form.patchValue(this.model);
    }
  }

  public onSubmit(){
    console.log(this.form.value);

    this.OnSubmit.emit(this.form.value);
  }

}
