import { Component, OnInit } from '@angular/core';
import { ProjectService, SumAmountRisedByEffy, SumProjectCost, UserService } from '@core';





@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  user:any 
  project:any 
  projectCost:any;
  amountRisedByEffy:any;
  
  constructor(
    private userService: UserService, 
    private projectService: ProjectService
    ) { }

  ngOnInit(): void {
    
    this.getUser();
    this.getProject();
  }

  // function to fetch data from user service
  getUser() {
    this.userService.getUser().subscribe({
      next:(result:any)=> {
        this.user= result[0]
      }, error:(err)=> {
        console.error(err)
      },
    })
  }


  // function to fetch data from project service
  getProject() {
    this.projectService.getProject().subscribe({
      next:(result:any)=> {
        this.project = result[0]
        this.projectCost = SumProjectCost(this.project.area) 
        this.amountRisedByEffy = SumAmountRisedByEffy(this.projectCost, this.project.revenu, this.project.totalPerson)
      }, error:(err)=> {
        console.error(err)
      },
    })
  }

}
