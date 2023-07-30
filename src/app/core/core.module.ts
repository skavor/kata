import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/users/user.service';
import { ProjectService } from './_services/projects/project.service';
import { SummaryService } from './_services/summary/summary.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ], 
  exports:[
    
  ], providers: [
    UserService, ProjectService, SummaryService
  ]
})
export class CoreModule { }
