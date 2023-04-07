import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alertmessage } from './alertmessage';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicealertService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Alertmessage[]>{
     return  this.http.get<Alertmessage[]>("http://localhost:3000/data");
  }
  create(payload:Alertmessage):Observable<Alertmessage>{
    return this.http.post<Alertmessage>("http://localhost:3000/data",payload);
  }
  
}
