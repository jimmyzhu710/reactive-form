import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './customer-validate';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, CustomValidators.forbiddenNames], CustomValidators.forbiddenNamesAnsync),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
