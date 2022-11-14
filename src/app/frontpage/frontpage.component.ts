import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  courobject:any;
  CourierList:any;

  constructor(private service:ShipService) { }
  GetCourById(courId:any)
  {
    this.service.GetCourierById(courId).subscribe(result=>{
    this.courobject=result;});
  }
  ngOnInit(): void {}

}
