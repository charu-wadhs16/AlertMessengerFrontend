import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';
import { ServicealertService } from 'src/app/servicealert.service';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
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
