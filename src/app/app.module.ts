import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { Check, LucideAngularModule, MapPin } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ MapPin, Check })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
