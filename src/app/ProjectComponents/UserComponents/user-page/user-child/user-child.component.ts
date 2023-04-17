import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Alertmessage } from 'src/app/alertmessage';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent {
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
   this.router.navigate(['/user-page'])
  .then(() => {
    window.location.reload();
  });
  }
}
