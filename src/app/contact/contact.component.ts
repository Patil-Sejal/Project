import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContService } from '../cont.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contobject:any;
  ContactList:any;

  contactForm:FormGroup = new  FormGroup({
    contId:new FormControl({value:0,disabled:true}),
    name:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    message:new FormControl(),
  });
  SaveContact(){
    console.log(this.contactForm.getRawValue());
    this.service.PostContactData(this.contactForm.getRawValue()).subscribe(result => {
    this.contobject = result;
   });
  }

  constructor(private service:ContService) {
    this.service.GetContactData().subscribe(result=>{
    this.ContactList=result;
    });
   }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid)
    {
      return;
    }
    console.warn(this.contactForm.value);
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Thank You For Contacting US!!!");
    }
  }
  ngOnInit(): void {
  }

}
