import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
})
export class GetInTouchComponent {

  constructor(private fb:FormBuilder) {}

  homeTouch = this.fb.group({
    contactName: ['',Validators.required],
    email: ['',Validators.required, Validators.email],
    phone: ['',Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
    treatment: [''],
    report: [''],
    file: [''],

  });

  // homeTouch = new FormGroup({
  //   contactName: new FormControl('',[Validators.required]),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   treatment: new FormControl(''),
  //   report: new FormControl(''),
  //   file: new FormControl(''),
  // });
  onSubmit() {
    // console.warn(this.homeTouch.value);
    var contactName = this.homeTouch.controls['contactName'].value;
    var email = this.homeTouch.controls['email'].value;
    var phone = this.homeTouch.controls['phone'].value;
    var treatment = this.homeTouch.controls['treatment'].value;
    var report = this.homeTouch.controls['report'].value;
    var file = this.homeTouch.controls['file'].value;

    console.log("Name is : " + contactName)
    console.log("Email is : " + email)
    console.log("Phone is : " + phone)
    console.log("Treatment is : " + treatment)
    console.log("Report : " + report)
    console.log("Files : " + file)
  }

  get contactName(){
    return this.homeTouch.get('contactName')
  }
  

}
