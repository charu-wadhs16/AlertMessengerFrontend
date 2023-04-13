import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';
import { ServicealertService } from 'src/app/servicealert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
"Action",
"Publish"
];
clickedRows = new Set<Alertmessage>();
selected:any;
constructor(private message:ServicealertService,private route:Router){

}
ngOnInit(): void {
  if(sessionStorage.getItem('role')!=='ADMIN' || sessionStorage.getItem('role')===null){
    this.route.navigate([""]);
  }
  this.getAllMessages();
}
getAllMessages()
{
  this.message.getAll().subscribe((data)=>{this.allMessages=data;})
}
publishData(element:Alertmessage)
  {
    this.message.publish(element).subscribe(()=>{this.route.navigate(['/card-component'])
  })
}
}
