import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddMessageComponent } from './add-message/add-message.component';

const routes: Routes = [{
  path:'',component:CardComponent},
  {
  path:'add-message',component:AddMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
