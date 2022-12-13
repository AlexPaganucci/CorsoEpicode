import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage = undefined;

  constructor(private authSrv:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(f:any){
    console.log(f)


      this.authSrv.login(f.value).subscribe(() => {
        try{
        f.reset();
        this.errorMessage = undefined;
        this.router.navigate(['/movies'])
      } catch (error:any){
        this.errorMessage = error;
        console.error(error);
      }
      })

  }
}
