import { Component, OnInit } from '@angular/core';
import { Alertmessage } from '../alertmessage';
import { ServicealertService } from '../servicealert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  messages:Alertmessage={
    id: 0, AC_Reg: '',Flight :'' ,
    Desk:'',
    Desk_Ctg:'',Escalated:'',
    Ack:'',Ack_By:'',Recieved:'',Priority:''
        // messageId: 0,
        // aircraftRegistration: "",
        // flight: "",
        // desk: "",
        // deskCategory: "",
        // escalated: "",
        // acknowledge: "",
        // acknowledgedBy: "",
        // received: "",
        // priority: ""
  }
constructor(private message:ServicealertService,private router:ActivatedRoute,private route:Router)
{
  
}
  ngOnInit(): void {
    this.router.paramMap.subscribe((params)=>{
    let id=Number(params.get('id'))
    this.getbyId(id)
   })
  }
  getbyId(id:number)
  {
    this.message.getbyId(id).subscribe((data)=>{
      this.messages=data;
    })
  }
  updateData()
  {
    this.message.update(this.messages).subscribe(()=>{this.route.navigate(['/card-component'])
  })
  }
  
}
