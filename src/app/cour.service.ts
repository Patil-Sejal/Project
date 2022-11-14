import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http:HttpClient) { }
  apiurl="https://localhost:44314/api/Courier";

  GetCourierData()
  {
    return this.http.get(this.apiurl);
  }
  PostCourierData(courform:any)
  {
    return this.http.post(this.apiurl,courform)
  }
  PutCourierData(courId:any)
  {
    return this.http.put(this.apiurl,+"/"+courId)
  }
  DeleteCourierData(courId:any)
  {
    return this.http.delete(this.apiurl+"/"+courId)
  }
  GetCourierById(courId:any)
  {
    return this.http.get(this.apiurl+"/"+courId)
  }

}
