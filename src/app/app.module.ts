import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { Check, Github, Instagram, LucideAngularModule, MapPin, Menu, Phone } from 'lucide-angular';
import { AboutBodyComponent } from './components/about-body/about-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutHeaderComponent,
    AboutBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ MapPin, Check, Github, Instagram, Phone, Menu})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
