import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project, ProjectService } from '@core';




@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectInfos:any = FormGroup
  submitted:boolean = false;
  constructor(public formBuilder:FormBuilder, private router:Router, private projectService: ProjectService) {
    this.projectInfos = this.formBuilder.group({
      type: ['', Validators.required],
      totalPerson: ['', Validators.required],
      revenue: ['', Validators.compose([ Validators.required, Validators.min(10000), Validators.max(100000)])],
      area: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }


  
  // get all controls from project infos form
  get f() { return this.projectInfos.controls; }


  // function to post project to database
  addProjectInfos() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.projectInfos.invalid) {
        return;
    }
  
    const project = new Project();
    project.area = this.projectInfos.value.area,
    project.revenu = this.projectInfos.value.revenue,
    project.totalPerson = this.projectInfos.value.totalPerson,
    project.type = this.projectInfos.value.type,
   
   
    this.projectService.addProject(project).subscribe({
      next:(res)=> {
        this.router.navigate(['/summary'])
      },
      error:(err)=> {
        console.error(err)
      },
    })
  
  }

}
