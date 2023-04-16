import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  constructor(private route:Router)
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

}
