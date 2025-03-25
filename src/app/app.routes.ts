import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homedir } from 'node:os';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { AllAchivementComponent } from './all-achivement/all-achivement.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to 'home'
    { path: 'home', component: HomeComponent },
    { path:'about', component:AboutComponent},
    { path:'contact', component:ContactComponent},
    { path:'form', component:FormComponent},
    { path:'all_project', component:AllProjectComponent},
    { path: 'all_achivements', component:AllAchivementComponent}


];

