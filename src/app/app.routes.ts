import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'experience', component: ExperiencePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];
