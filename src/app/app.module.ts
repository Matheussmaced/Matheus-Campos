import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { Check, ExternalLink, Github, Instagram, LucideAngularModule, MapPin, Menu, Phone } from 'lucide-angular';
import { AboutBodyComponent } from './components/about-body/about-body.component';
import { ProjectComponent } from './components/project/project.component';
import { WorkComponent } from './components/work/work.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutHeaderComponent,
    AboutBodyComponent,
    ProjectComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ MapPin, Check, Github, Instagram, Phone, Menu, ExternalLink}),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
