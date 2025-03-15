import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Default route (empty path) redirects to homepage
  { path: 'homepage', component: HomepageComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404 - redirects to homepage
];
