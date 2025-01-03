
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { RepairsComponent } from './pages/repairs/repairs.component';
import { PropertyOwnersComponent } from './pages/property-owners/property-owners.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateRepairPageComponent } from './pages/create-repair-page/create-repair-page.component';
import { OwnerPageComponent } from './pages/owner-page/owner-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'owner-management', component: OwnerPageComponent },
  {
    path: 'admin-homepage',
    component: AdminHomepageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'repairs', component: RepairsComponent },
      { path: 'property-owners', component: PropertyOwnersComponent },
      { path: 'create-repair-page', component: CreateRepairPageComponent },
      { path: 'search-results-page', component: SearchResultsPageComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
export class AppRoutingModule { }
