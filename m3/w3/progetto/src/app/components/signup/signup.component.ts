import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage = undefined;

  constructor(private authSrv: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(f: NgForm){
    console.log(f.value)
    this.authSrv.signup(f.value).subscribe(() => {
      try{
      f.reset();
      this.errorMessage = undefined;
      this.router.navigate(['/'])
    } catch (error:any){
      this.errorMessage = error;
      console.log(error);
    }
    });


}

}
