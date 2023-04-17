import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient,public spinnerService: SpinnerService) { }
  title = 'angularAlert';
}
