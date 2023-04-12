import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicealertService } from 'src/app/servicealert.service';
import { WidgetManager } from 'src/app/widgetmanager.ts';
 

@Component({
  selector: 'app-card',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {
  // @Input() wm! : WidgetManager;
  // @Output() todoDelete: EventEmitter<WidgetManager> = new EventEmitter(); 
    
allForms:WidgetManager[]=[];
displayedColumns: string[] = [
'widgetName',
'widgetTag',
'widgetStatus',
'widgetSize',
'description',
'Action',
'Delete'];

clickedRows = new Set<WidgetManager>();
selected:any;
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
   this.forms.getAll1().subscribe((data)=>{this.allForms=data;})
}
Del(id:any)
{
  this.forms.delete(id).subscribe(()=>{
    this.route.navigate(["/card-widget"])
  })
}
}
