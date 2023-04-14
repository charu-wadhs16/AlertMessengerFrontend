import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { ServicealertService } from 'src/app/servicealert.service';
import { WidgetManager } from 'src/app/widgetmanager.ts';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-card',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit,AfterViewInit {
  // @Input() wm! : WidgetManager;
  // @Output() todoDelete: EventEmitter<WidgetManager> = new EventEmitter(); 
 

//allForms:WidgetManager[]=[];
displayedColumns: string[] = [
'widgetName',
'widgetTag',
'widgetStatus',
'widgetSize',
'description',
'Action',
'Delete'];

//clickedRows = new Set<WidgetManager>();

//selected:any;

//element_data:WidgetManager[]=[];
dataSource=new MatTableDataSource<WidgetManager>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!:MatSort;

constructor(private forms:ServicealertService, private route:Router){

}

ngOnInit(): void {
  if(sessionStorage.getItem('role')!=='ADMIN' || sessionStorage.getItem('role')===null){
    this.route.navigate([""]);
  }
  this.getAllWidgets();
}


getAllWidgets()
{
   this.forms.getAll1().subscribe((data)=>{this.dataSource.data=data;})
}
ngAfterViewInit()
{
// this.dataSource.sort=this.matsorting;
this.paginator.pageSize=5;
this.paginator.pageIndex=0;
this.dataSource.paginator = this.paginator;
this.dataSource.sort=this.sort;
}


applyFilter(filterValue:string)
{
  this.dataSource.filter=filterValue.trim().toLowerCase();
  // console.log(filterValue);
}

Del(id:any)
{
  this.forms.delete(id).subscribe(()=>{
    this.route.navigate(["/card-widget"])
  })
}
}
