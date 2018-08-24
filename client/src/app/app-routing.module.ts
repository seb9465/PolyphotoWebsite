import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [
    // { path: 'header', component: HeaderComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'detail/:id', component: HeroDetailComponent },
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
