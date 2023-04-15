import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logins } from 'src/app/logins';
import { NotificationService } from 'src/app/notification.service';
import { ServicealertService } from 'src/app/servicealert.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  logins:Logins={
    userId:'',
    password:'',
    role:''
  }
  hide = true;
constructor(private login:ServicealertService,private router:Router, private notification: NotificationService)
  {
    
  }
ngOnInit(): void {
    
  }
clickButton(){
  this.login.getLogin(this.logins).subscribe(data=>{
    sessionStorage.setItem('role',data.role);
    if(sessionStorage.getItem('role')==='ADMIN'){
      this.router.navigate(["/home-page"]);
    }else if(sessionStorage.getItem('role')==='USER'){
      this.router.navigate(["/notifications"]);
      this.notification.initializeWebSocketConnection();

    }else{
      this.router.navigate([""]);
    }
  });

  
  
}
}
