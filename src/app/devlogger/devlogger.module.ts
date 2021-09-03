import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { DevloggerService } from './services/devlogger.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogFormComponent, LogsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[LogFormComponent, LogsComponent],
  providers:[DevloggerService]
})
export class DevloggerModule { }
