import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClassroomComponent } from './classroom/classroom.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmissionComponent } from './admission/admission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule, MatInputModule } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { LayoutComponent } from './layout/layout.component';
import { CanActivateLayout } from './layout/layout.canactivate';
import { ConfigService } from './helper/configservice';
import { TeacherComponent } from './teacher/teacher.component';
import { teacherWebSocketService } from './teacher/wsteacher.component';
import { classroomWebSocketService } from './classroom/wsclassroom.component';
import { userService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClassroomComponent,
    LoginComponent,
    RegisterComponent,
    AdmissionComponent,
    LayoutComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule
  ],
  providers: [
    CanActivateLayout,
    ConfigService, 
    teacherWebSocketService, 
    classroomWebSocketService,
    userService],
  bootstrap: [AppComponent]
})
export class AppModule { }