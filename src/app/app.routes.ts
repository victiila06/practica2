import { Routes } from '@angular/router';
import { HomeComponent} from './public/pages/home/home.component';

const PageNotFoundComponent = () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);
const EventChecksInComponent = () => import('./registration/pages/event-checks-in/event-checks-in.component').then(m => m.EventChecksInComponent);

const baseTitle = 'Eventify - Event Management System';
/**
 * The routes for the application.
 */

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: `${baseTitle} - Home` } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration/event-checks-in/new', loadComponent: EventChecksInComponent, data: { title: `${baseTitle} - Event Checks In` } },
  { path: '**', loadComponent: PageNotFoundComponent, data: { title: `${baseTitle} - Page Not Found` } }
];
