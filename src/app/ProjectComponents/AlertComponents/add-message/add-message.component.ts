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
//   id: 0, AC_Reg: '',Flight :'' ,
//   Desk:'',
//   Desk_Ctg:'',Escalated:'',
//    Ack:'',Ack_By:'',Recieved:'',Priority:''
  // messageId: 0,
  //       aircraftRegistration: "",
  //       flight: "",
  //       desk: "",
  //       deskCategory: "",
  //       escalated: "",
  //       acknowledge: "",
  //       acknowledgedBy: "",
  //       received: "",
  //       priority: ""
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
ngOnInit(): void {}
addData()
{
     this.message.create(this.messages).subscribe(()=>{
      this.router.navigate(["/card-component"])
     })
}


}
