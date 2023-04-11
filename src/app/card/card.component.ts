import { Component,OnInit } from '@angular/core';
import { Alertmessage } from '../alertmessage';
import { ServicealertService } from '../servicealert.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
allMessages:Alertmessage[]=[];
displayedColumns: string[] = [
// 'AC_Reg',
// 'Flight',
// 'Desk',
// 'Desk_Ctg',
// 'Escalated',
// 'Ack',
// 'Ack_By',
// 'Recieved',
//  'Priority',
// "messageId",
// "aircraftRegistration",
// "flight",
// "desk",
// "deskCategory",
// "escalated",
// "acknowledge",
// "acknowledgedBy",
// "received",
// "priority",
// 
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
constructor(private message:ServicealertService){

}
ngOnInit(): void {
  this.getAllMessages();
}
getAllMessages()
{
  this.message.getAll().subscribe((data)=>{this.allMessages=data;})
}
}
