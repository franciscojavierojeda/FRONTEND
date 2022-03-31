import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../../heroes/services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,private authService:AuthService) { }
  ngOnInit(): void {
  }

  get auth(){
    return this.authService.auth;
  }
 

  login(){
    this.authService.login()
        .subscribe(resp=>{
      console.log(resp);

      if(resp.id){
     this.router.navigate(['/heroes']);

      }
    }
      )

  }

}
