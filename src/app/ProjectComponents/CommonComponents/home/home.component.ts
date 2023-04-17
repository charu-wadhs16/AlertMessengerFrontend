import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    if(sessionStorage.getItem('role')!=='ADMIN' || sessionStorage.getItem('role')===null){
      this.router.navigate([""]);
    }
  }

  logOut(){
    alert("Logging off");
    sessionStorage.clear();
    this.router.navigate([""]);
  }
}
