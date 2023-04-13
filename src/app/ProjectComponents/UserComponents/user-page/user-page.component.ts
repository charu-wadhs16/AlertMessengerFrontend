import { Component } from '@angular/core';
import {Alertmessage} from '../../../alertmessage';
import {ServicealertService} from '../../../servicealert.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
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
  "Acknowledge"
  ];
  constructor(private message:ServicealertService,private route:Router){
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='USER' || sessionStorage.getItem('role')===null){
      this.route.navigate([""]);
    }
    this.getAllMessages();
  }
  getAllMessages()
  {
    this.message.getPublishedData().subscribe((data)=>{this.allMessages=data;})
  }

  logOut(){
    sessionStorage.clear();
    this.route.navigate([""]);
  }
  acknowledge()
  {
    this.route.navigate(["/user-page"]);
  }
}