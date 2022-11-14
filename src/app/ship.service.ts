import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http:HttpClient) { }
  apiurl="https://localhost:44314/api/Courier";
  GetCourierData()
  {
    return this.http.get(this.apiurl);
  }
  GetCourierById(courId:any)
  {
    return this.http.get(this.apiurl+"/"+courId)
  }
}
