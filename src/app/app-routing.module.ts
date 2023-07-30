import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path:'', component: UserComponent},
  { path:'project', component: ProjectComponent},
  { path:'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
