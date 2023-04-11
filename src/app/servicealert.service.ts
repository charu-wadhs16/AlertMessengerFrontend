import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alertmessage } from './alertmessage';
import {Observable} from 'rxjs';
import { WidgetManager } from './widgetmanager.ts';


@Injectable({
  providedIn: 'root'
})
export class ServicealertService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Alertmessage[]>{
     return  this.http.get<Alertmessage[]>("http://localhost:3000/data");
  }
  // getAll():Observable<Alertmessage[]>{
  //   return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchData");}
  getAll1():Observable<WidgetManager[]>{
    return  this.http.get<WidgetManager[]>("http://localhost:3000/data");
 }
  create(payload:Alertmessage):Observable<Alertmessage>{
    return this.http.post<Alertmessage>("http://localhost:3000/data",payload);
  }
  getbyId(id:number):Observable<Alertmessage>{
    return this.http.get<Alertmessage>(`http://localhost:3000/data/${id}`)
  }
  update(payload:Alertmessage):Observable<Alertmessage>{
    return this.http.put<Alertmessage>(`http://localhost:3000/data/${payload.messageId}`,payload);
  }
  delete(id:number)
  {
    return this.http.delete(`http://localhost:3000/data/${id}`)
  }
  create1(payload:WidgetManager):Observable<WidgetManager>{
    return this.http.post<WidgetManager>("http://localhost:3000/data",payload);
  }
}
