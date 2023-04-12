import { Component,OnInit } from '@angular/core';
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
constructor(private forms:ServicealertService){

}
ngOnInit(): void {
  this.getAllWidgets();
}
getAllWidgets()
{
   this.forms.getAll1().subscribe((data)=>{this.allForms=data;})
}
Del(id:any)
{
  
}
}
//  deleteTicket(rowid: number) {
//   if (rowid > -1) {
//     this.myDataArray.splice(rowid, 1);
//   }
// }