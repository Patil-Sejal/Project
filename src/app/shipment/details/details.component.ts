import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/ship.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  courobject:any;
  CourierList:any;
  constructor(private service:ShipService) {
   }
   courForm=new FormGroup({});
  GetCourById(courId:any){
    this.service.GetCourierById(courId).subscribe(result=>{
      this.courobject=result;
    });
   }
  ngOnInit(): void {
  }

}
