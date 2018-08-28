import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { MainReservationsComponent } from './reservations/main-reservations/main-reservations.component';
import { ReservationsHeaderComponent } from './reservations/reservations-header/reservations-header.component';
import { MainCalendarComponent } from './reservations/main-calendar/main-calendar.component';
import { SecondaryCalendarsComponent } from './reservations/secondary-calendars/secondary-calendars.component';
import { ReservationsPopupComponent } from './reservations/reservations-popup/reservations-popup.component';
import { CalendarComponent } from './reservations/calendar/calendar/calendar.component';
import { CalendarCellComponent } from './reservations/calendar/calendar-cell/calendar-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainReservationsComponent,
    ReservationsHeaderComponent,
    MainCalendarComponent,
    SecondaryCalendarsComponent,
    ReservationsPopupComponent,
    CalendarComponent,
    CalendarCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
