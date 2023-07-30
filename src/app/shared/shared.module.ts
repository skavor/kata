import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotEligibilityComponent } from './not-eligibility/not-eligibility.component';
import { EligibitilyDirective } from '../core/_directives/eligibility/eligibitily.directive';
import { NotEligibilityDirective } from '../core/_directives/not-eligibility/not-eligibility.directive';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { UserService } from '../core/_services/users/user.service';
import { ProjectService } from '../core/_services/projects/project.service';



@NgModule({
  declarations: [
    NavbarComponent,
    NotEligibilityComponent,
    EligibitilyDirective,
    NotEligibilityDirective,
    EligibilityComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
    
    
  ], 
  exports:[
    NavbarComponent,
    NotEligibilityComponent,
    EligibilityComponent
  ],providers:[
    UserService, ProjectService
  ]
})
export class SharedModule { }
