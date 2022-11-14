import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private http:HttpClient) { }
  apiurl="https://localhost:44314/api/Customer";

  GetCustomerData()
  {
    return this.http.get(this.apiurl);
  }
  PostCustomerData(inputdata:any)
  {
    return this.http.post(this.apiurl,inputdata)
  }
  PutCustomerData(custId:any)
  {
    return this.http.put(this.apiurl,+"/"+custId)
  }
  DeleteCustomerData(custId:any)
  {
    return this.http.delete(this.apiurl+"/"+custId)
  }
  GetCustomerById(custId:any)
  {
    return this.http.get(this.apiurl+"/"+custId)
  }
}
