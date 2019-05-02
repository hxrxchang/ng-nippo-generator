import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './pages/upload/upload.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { DisplayReportComponent } from './components/display-report/display-report.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, UploadComponent, UploadFormComponent, DisplayReportComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
