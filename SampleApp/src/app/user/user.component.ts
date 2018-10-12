import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(
    private auth:AuthService, 
    private router:Router
    ) { }


    ngOnInit(){
     
    }



  Login(){
      this.auth.userLogin();
  }

 
}
