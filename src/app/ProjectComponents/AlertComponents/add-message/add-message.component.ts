import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';
import { ServicealertService } from 'src/app/servicealert.service';
import { FormBuilder,Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit{
  validateForm1=new FormControl('',[
    Validators.required,
  ]);
  validateForm2=new FormControl('',[
    Validators.required,
  ]);
  validateForm3=new FormControl('',[
    Validators.required,
  ]);
  validateForm4=new FormControl('',[
    Validators.required,
  ]);
  validateForm5=new FormControl('',[
    Validators.required,
  ]);
  validateForm6=new FormControl('',[
    Validators.required,
  ]);
  validateForm7=new FormControl('',[
    Validators.required,
  ]);
  validateForm8=new FormControl('',[
    Validators.required,
  ]);
  validateForm9=new FormControl('',[
    Validators.required,
  ]);
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
constructor(private message:ServicealertService,private router:Router)
{
  
}
ngOnInit(): void {
  if(sessionStorage.getItem('role')!=='ADMIN'){
    this.router.navigate([""]);
  }
}
addData()
{
  
     this.message.create(this.messages).subscribe(()=>{
      this.router.navigate(["/card-component"])
     })
}


}
