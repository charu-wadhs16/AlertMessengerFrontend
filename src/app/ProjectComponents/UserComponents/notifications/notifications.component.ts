import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../../notification.service';
import { Alertmessage } from 'src/app/alertmessage';
import { MatTableDataSource } from '@angular/material/table';
import {ServicealertService} from '../../../servicealert.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit,AfterViewInit{
  allMessages:Alertmessage[]=[];
  messages:Alertmessage={
      messageId: 0,
      aircraftRegistration: "",
      flight: "",
      desk: "",
      deskCategory: "",
      escalated: "",
      acknowledge: "",
      acknowledgedBy: "",
      received: "",
      priority: "",
      isPublished: 0
    }
  clickedRows = new Set<Alertmessage>();
  displayedColumns: string[] = [
  "aircraftRegistration",
  "flight",
  "desk",
  "deskCategory",
  "escalated",
  "acknowledge",
  "acknowledgedBy",
  "received",
  "priority",
  ];
  dataSource=new MatTableDataSource<Alertmessage>();
  constructor(private route:Router, public notification: NotificationService,private message:ServicealertService)
  {
  }
  ngAfterViewInit(): void {
  
  }

  ngOnInit(): void{
    if(sessionStorage.getItem('role')!=='USER' || sessionStorage.getItem('role')===null){
      this.route.navigate([""]);
    }
    this.sendMessage();
  }
  logOut(){
    alert("Logging off");
    sessionStorage.clear();
    this.route.navigate([""]);
  }
  sendMessage() {
    this.dataSource.data=this.notification.msg;
   }
}