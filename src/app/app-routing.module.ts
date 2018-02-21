import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: '',
    component: HomeComponent
  },

  {
    path: 'about/:id',
    component: AboutComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
