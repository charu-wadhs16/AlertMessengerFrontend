import { Component,OnInit } from '@angular/core';
import { Alertmessage } from '../alertmessage';
import { ServicealertService } from '../servicealert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit{
messages:Alertmessage={
  id: 0, AC_Reg: '',Flight :'' ,
  Desk:'',
  Desk_Ctg:'',Escalated:'',
  Ack:'',Ack_By:'',Recieved:'',Priority:''
}
constructor(private message:ServicealertService,private router:Router)
{
  
}
ngOnInit(): void {}
addData()
{
     this.message.create(this.messages).subscribe(()=>{
      this.router.navigate(["/"])
     })
}


}
