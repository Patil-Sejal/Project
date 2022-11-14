import { Component, OnInit } from '@angular/core';
import { CourService } from '../cour.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
    CourierList:any;
    courobject:any;
    constructor(private service:CourService)
    {
      this.service.GetCourierData().subscribe(result=>{
      this.CourierList=result;
      });
    }
    courform=new FormGroup
    ({
      courId:new FormControl({value:0,disabled:true}),
      name:new FormControl(),
      docket:new FormControl(),
      fromCity:new FormControl(),
      toCity:new FormControl(),
      currentCity:new FormControl(),
      weight:new FormControl()
    });
    SaveCourier()
    {
      console.log(this.courform.getRawValue());
      this.service.PostCourierData(this.courform.getRawValue()).subscribe(result => {
      this.courobject = result;});
    }

    GetCourById(courId:any)
    {
      this.service.GetCourierById(courId).subscribe(result=>{
      this.courobject=result;});
    }
    DeleteCourById(courId:any)
    {
      this.service.DeleteCourierData(courId).subscribe(result=>{
      this.courobject=result;});
    }
    UpdateCourById()
    {
      this.service.PutCourierData(null).subscribe(result=>{
      this.courobject=result;});
    }
  ngOnInit(): void {}
}


