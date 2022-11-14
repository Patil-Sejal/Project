import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  CustomerList:any;
  custobject:any;
  constructor(private service:CustService)
  {
    this.service.GetCustomerData().subscribe(result=>{
    this.CustomerList=result;});
  }
  custform=new FormGroup
  ({
    custId:new FormControl({value:0,disabled:true}),
    name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    address:new FormControl()
  });
  SaveCustomer()
  {
    console.log(this.custform.getRawValue());
    this.service.PostCustomerData(this.custform.getRawValue()).subscribe(result => {
    this.custobject = result;});
  }
  GetCustById(custId:any)
  {
    this.service.GetCustomerById(custId).subscribe(result=>{
    this.custobject=result;});
  }
  DeleteCustById(custId:any)
  {
    this.service.DeleteCustomerData(custId).subscribe(result=>{
    this.custobject=result;});
  }
  UpdateCustById()
  {
    this.service.PutCustomerData(null).subscribe(result=>{
    this.custobject=result;});
  }
  ngOnInit(): void {}

}
