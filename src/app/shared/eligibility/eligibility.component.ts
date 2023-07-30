import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SummaryService } from '@core';


@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  @Input() cost!: number;
  @Input() projectType!: string;

  constructor(private summaryService: SummaryService, private router:Router) { }

  ngOnInit(): void {
    
  }

  // function to delete all data from users and projects 
  deleteAllData() {
    this.summaryService.deleteData().subscribe({
        next:(result) => {
          this.router.navigate(['/'])
        }, error:(err) => {
          console.log(err)
        }
    })
  }

}
