import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logins } from 'src/app/logins';
import { ServicealertService } from 'src/app/servicealert.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  logins:Logins={
    username:'',
    password:''
  }
  hide = true;
constructor(private login:ServicealertService,private router:Router)
  {
    
  }
ngOnInit(): void {
    
  }
clickButton(){
  this.router.navigate(["/home-page"]);
}
}
