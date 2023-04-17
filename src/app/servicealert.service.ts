import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alertmessage } from './alertmessage';
import { Observable} from 'rxjs';
import { Logins } from './logins';
@Injectable({
  providedIn: 'root'
})

export class ServicealertService{
  constructor(private http:HttpClient) { }

  getLogin(payload:Logins):Observable<any>{
    return this.http.put<any>("accolite/alertmessenger/login", payload);

  }
   getAll():Observable<Alertmessage[]>{
      return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchData");
   }
  
   create(payload:Alertmessage):Observable<Alertmessage>{
   return this.http.post<Alertmessage>("accolite/alertmessenger/saveData",payload);
   }
  
   getbyId(id:number):Observable<Alertmessage>{
   return this.http.get<Alertmessage>(`accolite/alertmessenger/getbyid/${id}`)
   }
  
  update(payload:Alertmessage):Observable<Alertmessage>{
    return this.http.put<Alertmessage>(`accolite/alertmessenger/updateData/${payload.messageId}`,payload);
  }
  publish(payload:Alertmessage):Observable<Alertmessage>{
    console.log(payload);
    return this.http.put<Alertmessage>(`accolite/alertmessenger/publishing/${payload.messageId}`,payload);
  }
  getPublishedData():Observable<Alertmessage[]>
   {
    return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchpublished");
   }

  getUnReadData():Observable<any>
   {
    return  this.http.get<any>("accolite/alertmessenger/fetchunreadforuser");
   }
   
   ackById(id:any):Observable<any>{
    return this.http.put<any>(`accolite/alertmessenger/acknowledge/${id}`,id);
    }

}
