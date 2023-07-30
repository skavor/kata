import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from '@core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInfos:any = FormGroup
  submitted:boolean = false;
  constructor(
     public formBuilder:FormBuilder,
     private router:Router, 
     private userService:UserService
    ) { }

  ngOnInit(): void {
    this.userInfos = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      gender: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }



  // get all controls from user infos form
  get f() { return this.userInfos.controls; }


  // function to post user in database
  addUserInfos() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userInfos.invalid) {
        return;
    }

    const user = new User();
    user.email = this.userInfos.value.email,
    user.firstName = this.userInfos.value.firstname,
    user.gender = this.userInfos.value.gender,
    user.lastName = this.userInfos.value.lastname,
    user.phone = this.userInfos.value.phone


    this.userService.addUser(user).subscribe({
      next:(res)=> {
        this.router.navigate(['/project'])
      },
      error:(err)=> {
        console.error(err)
      },
    })
  }

}
