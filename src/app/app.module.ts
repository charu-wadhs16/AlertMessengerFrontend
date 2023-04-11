import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AddMessageComponent } from './add-message/add-message.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { DisplayMessageComponent } from './card/display-message/display-message.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { AddWidgetsComponent } from './add-widgets/add-widgets.component';
import { WidgetNavbarComponent } from './widget-navbar/widget-navbar.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddMessageComponent,
    DisplayMessageComponent,
    EditComponentComponent,
    HomeComponent,
    NavbarComponent,
    UserPageComponent,
    NotificationsComponent,
    LoginpageComponent,
    CardWidgetComponent,
    AddWidgetsComponent,
    WidgetNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
