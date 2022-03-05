import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import {  } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.css'],
})
export class LoanTypesComponent implements OnInit {
  addLoanForm: any = FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addLoanForm = new FormGroup({
    //   'loanName' : new FormControl(),
    //   'loanDescription' : new FormControl()

    // })

    // this.addLoanForm = this.fb.group({
    //   loanName: new FormControl('Rakib'),
    //   loanType: new FormControl('Personal Loan'),
    //   loanDescription: new FormControl('This is for pc'),
     
    // });



    this.addLoanForm = this.fb.group({
      'loanName': new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5)
       ]
      ),

      'loanType': new FormControl('',Validators.required),

      'loanDescription': new FormControl('',[
        Validators.required,
        Validators.maxLength(10)   
      ]
      ),
     
    });

  //   const loanObj = {
  //     'loanName': 'Rakib',
  //     'loanType': '1',
  //     'loanDescription': 'laptop'
     
  // }

  // this.addLoanForm.setValue(loanObj);

  }


  resetForm(){

    this.addLoanForm.reset();

}


  

  addLoanType() {
    console.log(this.addLoanForm.value);
  }
}
