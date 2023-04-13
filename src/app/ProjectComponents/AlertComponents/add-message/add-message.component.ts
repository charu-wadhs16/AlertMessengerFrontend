import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';
import { ServicealertService } from 'src/app/servicealert.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit{
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
constructor(private message:ServicealertService,private router:Router)
{
  
}
ngOnInit(): void {
  if(sessionStorage.getItem('role')!=='ADMIN'){
    this.router.navigate([""]);
  }
}
addData()
{
  
     this.message.create(this.messages).subscribe(()=>{
      this.router.navigate(["/card-component"])
     })
}


}
