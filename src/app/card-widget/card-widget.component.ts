import { Component,OnInit } from '@angular/core';
import { ServicealertService } from '../servicealert.service';
import { WidgetManager } from '../widgetmanager.ts';


@Component({
  selector: 'app-card',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {
allForms:WidgetManager[]=[];
displayedColumns: string[] = ['widgetId',
'widgetName',
'widgetTag',
'widgetStatus',
'widgetSize',
'description'];
constructor(private forms:ServicealertService){

}
ngOnInit(): void {
  this.getAllWidgets();
}
getAllWidgets()
{
   this.forms.getAll1().subscribe((data)=>{this.allForms=data;})
}
}