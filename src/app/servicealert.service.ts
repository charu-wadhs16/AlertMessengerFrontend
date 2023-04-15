import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alertmessage } from './alertmessage';
import { Observable} from 'rxjs';
import { WidgetManager } from './widgetmanager.ts';
import { Logins } from './logins';

@Injectable({
  providedIn: 'root'
})

export class ServicealertService {
  constructor(private http:HttpClient) { }

  getLogin(payload:Logins):Observable<any>{
    return this.http.put<any>("accolite/alertmessenger/login", payload);

  }
   getAll():Observable<Alertmessage[]>{
      return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchData");
   }
  // getAll():Observable<Alertmessage[]>{
  //   return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchData");}
   
  getAll1():Observable<WidgetManager[]>{
    return  this.http.get<WidgetManager[]>("accolite/WidgetManager/widgets");
  }
   create(payload:Alertmessage):Observable<Alertmessage>{
   return this.http.post<Alertmessage>("accolite/alertmessenger/saveData",payload);
}
  // create(payload:Alertmessage):Observable<Alertmessage>{
  //   return this.http.post<Alertmessage>("accolite/alertmessenger/saveData",payload);
  // }
   getbyId(id:number):Observable<Alertmessage>{
   return this.http.get<Alertmessage>(`accolite/alertmessenger/getbyid/${id}`)
   }
   getbyId1(widgetId:number):Observable<WidgetManager>{
    return this.http.get<WidgetManager>(`accolite/WidgetManager/widget/${widgetId}`)
    }

  // getbyId(id:number):Observable<Alertmessage>{
  //   return this.http.get<Alertmessage>(`http://localhost:3000/data/${id}`)
  // }
  update(payload:Alertmessage):Observable<Alertmessage>{
    return this.http.put<Alertmessage>(`accolite/alertmessenger/updateData/${payload.messageId}`,payload);
  }
  publish(payload:Alertmessage):Observable<Alertmessage>{
    console.log(payload);
    return this.http.put<Alertmessage>(`accolite/alertmessenger/publishing/${payload.messageId}`,payload);
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
  getPublishedData():Observable<Alertmessage[]>
   {
    return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchforuser");
   }
}
























// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Alertmessage } from './alertmessage';
// import {Observable} from 'rxjs';
// import { WidgetManager } from './widgetmanager.ts';


// @Injectable({
//   providedIn: 'root'
// })
// export class ServicealertService {

//   constructor(private http:HttpClient) { }
//    getAll():Observable<Alertmessage[]>{
//       return  this.http.get<Alertmessage[]>("http://localhost:3000/data");
//    }
  
//   // getAll():Observable<Alertmessage[]>{
//   //   return  this.http.get<Alertmessage[]>("accolite/alertmessenger/fetchData");}

//    getAll1():Observable<WidgetManager[]>{
//     return  this.http.get<WidgetManager[]>("http://localhost:3000/data");
//   }

//    create(payload:Alertmessage):Observable<Alertmessage>{
//    return this.http.post<Alertmessage>("http://localhost:3000/data",payload);
// }

//   // create(payload:Alertmessage):Observable<Alertmessage>{
//   //   return this.http.post<Alertmessage>("accolite/alertmessenger/saveData",payload);
//   // }

//    getbyId(id:number):Observable<Alertmessage>{
//    return this.http.get<Alertmessage>(`http://localhost:3000/data/${id}`)
//    }

//   // getbyId(id:number):Observable<Alertmessage>{
//   //   return this.http.get<Alertmessage>(`http://localhost:3000/data/${id}`)
//   // }
  
//   update(payload:Alertmessage):Observable<Alertmessage>{
//     return this.http.put<Alertmessage>(`http://localhost:3000/data/${payload.messageId}`,payload);
//   }
//   delete(id:number)
//   {
//     return this.http.delete(`http://localhost:3000/data/${id}`)
//   }
//   publish(payload:Alertmessage):Observable<Alertmessage>{
//     return this.http.put<Alertmessage>(`http://localhost:3000/data/${payload.messageId}`,payload);
//   }
//   create1(payload:WidgetManager):Observable<WidgetManager>{
//     return this.http.post<WidgetManager>("http://localhost:3000/data",payload);
//   }
// }
