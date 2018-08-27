import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReservationsComponent } from './reservations/main-reservations/main-reservations.component';

const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'reservations', component: MainReservationsComponent },
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
