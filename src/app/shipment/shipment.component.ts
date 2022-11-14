import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
  courobject:any;
  CourierList:any;
  constructor(private service:ShipService) {}
  courForm=new FormGroup({});
  GetCourById(courId:any)
  {
    this.service.GetCourierById(courId).subscribe(result=>{
    this.courobject=result;});
  }
  ngOnInit(): void {}
}
