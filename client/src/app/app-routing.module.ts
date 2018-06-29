import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent }
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
