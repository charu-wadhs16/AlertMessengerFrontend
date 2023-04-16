import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';
import { ServicealertService } from 'src/app/servicealert.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,AfterViewInit {
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
"Actions"
];
clickedRows = new Set<Alertmessage>();
selected:any;
dataSource=new MatTableDataSource<Alertmessage>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
   sort!: MatSort;

constructor(private message:ServicealertService,private route:Router){

}
ngOnInit(): void {
  if(sessionStorage.getItem('role')!=='ADMIN' || sessionStorage.getItem('role')===null){
    this.route.navigate([""]);
  }
  this.getAllMessages();
}
ngAfterViewInit()
{
this.dataSource.sort=this.sort;
this.paginator.pageSize=5;
this.paginator.pageIndex=0;
this.dataSource.paginator = this.paginator;
}

getAllMessages()
{
  this.message.getAll().subscribe((data)=>{this.dataSource.data=data;})
}
publishData(element:Alertmessage)
{
    this.message.publish(element).subscribe(()=>{this.route.navigate(['/card-component'])
  })
}
applyFilter(filterValue:string)
{
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
}
}
