
import { Component,OnInit,ViewChild,AfterViewInit,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceWidgetService } from 'src/app/service-widget.service';
import { WidgetManager } from 'src/app/widgetmanager.ts';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteRowComponent } from './delete-row/delete-row.component';

@Component({
  selector: 'app-card',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit, AfterViewInit {
curRow! :false;
displayedColumns: string[] = [
'widgetName',
'widgetTag',
'widgetStatus',
'widgetSize',
'description',
'Action',];
  showSpinner = true;
  dataSource = new MatTableDataSource<WidgetManager>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


constructor(private forms:ServiceWidgetService, private route:Router,public dialog: MatDialog){

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('role') !== 'ADMIN' || sessionStorage.getItem('role') === null) {
      this.route.navigate([""]);
    }
    this.getAllWidgets();
  }

  getAllWidgets() {

    this.forms.getAll1().subscribe((data) => {
      this.dataSource.data = data;
    })
  }
  ngAfterViewInit() {
    // this.dataSource.sort=this.matsorting;
    // this.paginator.pageSize = 5;
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


Del(id:any)
{
  // if(confirm("Are you sure to delete?"))
  // this.forms.delete(id).subscribe(()=>{
  //   this.getAllWidgets();
  // })
  const dialogRef= this.dialog.open(DeleteRowComponent)
  dialogRef.afterClosed().subscribe((res)=>{
    // console.log(res);
    if(res=='yes')
    {
      this.forms.delete(id).subscribe(()=>{
           this.getAllWidgets();
         })
    }
    else if(res=='no')
    {
      this.getAllWidgets();
    }
  })
}

applyFilter(filterValue:string)
{
  this.dataSource.filter=filterValue.trim().toLowerCase();
  // console.log(filterValue);
}

}


