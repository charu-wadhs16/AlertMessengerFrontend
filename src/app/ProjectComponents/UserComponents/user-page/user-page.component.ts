import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import {Alertmessage} from '../../../alertmessage';
import {ServicealertService} from '../../../servicealert.service';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LogOffComponent } from '../../log-off/log-off.component';

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
  ];
  element_data:Alertmessage[]=this.allMessages;
  dataSource=new MatTableDataSource<Alertmessage>(this.element_data);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
   sort!: MatSort;
  constructor(private message:ServicealertService,private route:Router,public dialog:MatDialog){
  }
  applyFilter(filterValue:string)
  {
  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  }
  ngAfterViewInit()
  {
  this.dataSource.sort=this.sort;
  this.paginator.pageSize=5;
  this.paginator.pageIndex=0;
  this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='USER' || sessionStorage.getItem('role')===null){
      this.route.navigate([""]);
    }
    
    this.getAllMessages();
  }
  show!:boolean;
  getAllMessages()
  {
    this.message.getPublishedData().subscribe((data)=>{
      this.dataSource.data=data;})
    
  }
  
  logOut(){
    // alert("Logging off");
    const dialogRef= this.dialog.open(LogOffComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res=='yes')
      {
      sessionStorage.clear();
      this.route.navigate([""]);
      }
      // else if(res=='no')
      // {
      //   this.route.navigate(["/"]);
      // }
    })
  }
  acknowledge()
  {
    this.route.navigate(["/user-page"]);
  }
  onClose()
  {
   this.route.navigate(['/card-component'])
  .then(() => {
    window.location.reload();
  });
  }
}