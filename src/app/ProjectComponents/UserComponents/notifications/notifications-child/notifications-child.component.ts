import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';

@Component({
  selector: 'app-notifications-child',
  templateUrl: './notifications-child.component.html',
  styleUrls: ['./notifications-child.component.css']
})
export class NotificationsChildComponent {
  @Input() curRow=new Set<Alertmessage>();
  show!: boolean;
  ngOnInit(): void {
    this.show=false;
  }
  constructor(private router:Router)
  {

  }
  toggle()
  {
    this.show=!this.show;
  }
  onClose()
  {
    this.router.navigate(['/notification-page'])
    .then(() => {
      window.location.reload();
    });

  }


}
