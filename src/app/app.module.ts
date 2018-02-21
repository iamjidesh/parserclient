import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoggerService} from './logger.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MybucketService } from './services/mybucket.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService,MybucketService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
