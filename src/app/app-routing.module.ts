import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LogFormComponent } from './devlogger/components/log-form/log-form.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {
    path:'devlogger',children:[
      {path:'log-form',component:LogFormComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
