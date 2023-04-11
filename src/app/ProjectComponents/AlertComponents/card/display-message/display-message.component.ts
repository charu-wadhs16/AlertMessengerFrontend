import { Component,Input } from '@angular/core';
import { Alertmessage } from 'src/app/alertmessage';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {
  @Input() curRow=new Set<Alertmessage>();
 
}
