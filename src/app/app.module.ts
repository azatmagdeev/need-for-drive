import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { StartMainComponent } from './start-main/start-main.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    StartMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
