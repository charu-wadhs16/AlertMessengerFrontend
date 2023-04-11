import { Component } from '@angular/core';
import { WidgetManager } from '../widgetmanager.ts';
import { ServicealertService } from 'src/app/servicealert.service';
import { Router } from '@angular/router';

interface Options{
  value1:boolean;
  viewValue1:boolean;
}
interface Size{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-add-widgets',
  templateUrl: './add-widgets.component.html',
  styleUrls: ['./add-widgets.component.css']
})
export class AddWidgetsComponent {
  options:Options[]=[
    {value1:true,viewValue1:true},
    {value1:false,viewValue1:false}
  ];
  size:Size[]=[
    {value:'1 x',viewValue:'1 x'},
    {value:'2 x',viewValue:'2 x'},
    {value:'3 x',viewValue:'3 x'},
    {value:'4 x',viewValue:'4 x'}
  ];
  form:WidgetManager={
    widgetId: 0, widgetName: '',widgetTag :'' ,
    widgetStatus:'',
    widgetSize:'',description:''
  }
  constructor(private forms:ServicealertService,private router:Router)
  {
  
  }
  ngOnInit(): void {}
  addData()
  {
    
       this.forms.create1(this.form).subscribe(()=>{
        this.router.navigate(["/card-widget"])
       })
       
  }
  }
