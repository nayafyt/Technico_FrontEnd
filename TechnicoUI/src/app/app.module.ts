import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyOwnerService } from '../services/property-owner.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CreateOwnerComponent } from './pages/create-owner/create-owner.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    CreateOwnerComponent,
    ReactiveFormsModule
   
  ],
  providers: [PropertyOwnerService, HttpClient],
})
export class AppModule { }