import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId = 0;
  photoId = 0;
  product: string = '';

  username: string = '';
  
 
  

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      const interValue = params;
      // console.log(params);
      this.productId = interValue.productId;
      this.photoId = interValue.photoId;
    });
  }

  ngOnInit(): void { }


  loadValues(formValue : NgForm){
    let userDetails = {
      username: 'Rakib',
    }
    formValue.setValue(userDetails);
  }

  addProduct(formValue: NgForm) {
    console.log(formValue.value);
  }


  resetForm(formValue : NgForm){
    formValue.reset();
  }


}
