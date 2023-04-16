import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-widget-navbar',
  templateUrl: './widget-navbar.component.html',
  styleUrls: ['./widget-navbar.component.css']
})
export class WidgetNavbarComponent {
constructor(private route:Router){}
logOut(){
  alert("Logging off");
  
  sessionStorage.clear();
  this.route.navigate([""]);
  
  // this.route.navigate(["card-widget"])
}
}
