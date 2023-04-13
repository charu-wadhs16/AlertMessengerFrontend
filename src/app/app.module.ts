import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './ProjectComponents/AlertComponents/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AddMessageComponent } from './ProjectComponents/AlertComponents/add-message/add-message.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { DisplayMessageComponent } from './ProjectComponents/AlertComponents/card/display-message/display-message.component';
import { EditComponentComponent } from './ProjectComponents/AlertComponents/edit-component/edit-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './ProjectComponents/CommonComponents/home/home.component';
import { NavbarComponent } from './ProjectComponents/CommonComponents/navbar/navbar.component';
import { UserPageComponent } from './ProjectComponents/UserComponents/user-page/user-page.component';
import { NotificationsComponent } from './ProjectComponents/UserComponents/notifications/notifications.component';
import { LoginpageComponent } from './ProjectComponents/CommonComponents/loginpage/loginpage.component';
import { CardWidgetComponent } from './ProjectComponents/WidgetComponents/card-widget/card-widget.component';
import { AddWidgetsComponent } from './ProjectComponents/WidgetComponents/add-widgets/add-widgets.component';
import { WidgetNavbarComponent } from './ProjectComponents/WidgetComponents/widget-navbar/widget-navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { EditWidgetComponent } from './ProjectComponents/WidgetComponents/edit-widget/edit-widget.component';
import { PaginatorWidgetComponent } from './ProjectComponents/WidgetComponents/paginator-widget/paginator-widget.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
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
    EditWidgetComponent,
    PaginatorWidgetComponent,
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
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
