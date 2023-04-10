import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { AddWidgetsComponent } from './add-widgets/add-widgets.component';

const routes: Routes = [
  {
    path:'notifications',component:NotificationsComponent
  },
  {
    path:'card-widget',component:CardWidgetComponent
  },
  {
    path:'',component:LoginpageComponent
  },
  {
    path:'home-page',component:HomeComponent
  },
  {
    path:'user-page',component: UserPageComponent
  },
  {
  path:'card-component',component:CardComponent},
  {
  path:'add-message',component:AddMessageComponent
  },
  {
    path:'edit-component/:id',component:EditComponentComponent
  },
  {
    path:'add-widget',component:AddWidgetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
