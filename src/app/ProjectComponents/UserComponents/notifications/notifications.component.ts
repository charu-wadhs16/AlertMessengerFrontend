import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../../notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  
  constructor(private route:Router, public notification: NotificationService)
  {
  }
  
  ngOnInit(): void{
    if(sessionStorage.getItem('role')!=='USER' || sessionStorage.getItem('role')===null){
      this.route.navigate([""]);
    }
  }

  logOut(){
    sessionStorage.clear();
    this.route.navigate([""]);
  }

  sendMessage() {
    
   
  }

}
