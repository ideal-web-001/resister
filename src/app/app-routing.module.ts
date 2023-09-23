import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'registerform',component:RegisterformComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
