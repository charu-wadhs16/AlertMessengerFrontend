import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WidgetManager } from './widgetmanager.ts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceWidgetService {
  constructor(private http:HttpClient) { }
  getAll1():Observable<WidgetManager[]>{
    return  this.http.get<WidgetManager[]>("accolite/WidgetManager/widgets");
  }
  getbyId1(widgetId:number):Observable<WidgetManager>{
    return this.http.get<WidgetManager>(`accolite/WidgetManager/widget/${widgetId}`)
  }
  update1(payload:WidgetManager):Observable<WidgetManager>{
      return this.http.put<WidgetManager>(`accolite/WidgetManager/widget/${payload.widgetId}`,payload);
  }
  delete(widgetId:number)
  {
    return this.http.delete(`accolite/WidgetManager/widget/${widgetId}`);
  }
  create1(payload:WidgetManager):Observable<WidgetManager>{
    return this.http.post<WidgetManager>("accolite/WidgetManager/saveWidget",payload);
  }
}
