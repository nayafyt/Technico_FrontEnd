import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
     { path: '', redirectTo: '/login',
         pathMatch: 'full' 
     },
     { path: 'login', 
        component: LoginComponent 
    }, 
    { path: 'admin-homepage', 
        component: AdminHomepageComponent 
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule { }
