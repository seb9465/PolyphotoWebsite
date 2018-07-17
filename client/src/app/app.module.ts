import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ButtonMenuComponent } from './features/button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
