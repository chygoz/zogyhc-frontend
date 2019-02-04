/**
 * Created by saikiran on 09/01/19.
 */
import {RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmissionComponent } from './admission/admission.component';

const AppRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admission', component: AdmissionComponent},
    {path: 'aboutus', component: AboutUsComponent},
    {path: 'classroom', component: ClassroomComponent},
    {path: '**', component: HomeComponent },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});