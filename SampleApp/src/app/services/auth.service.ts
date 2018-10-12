import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userLogin(){
      localStorage.setItem('token','123456789');
  }
  userLogout(){
      localStorage.clear();
  }

  userIsAuthenticated():boolean{
      const token = localStorage.getItem('token');
      if(token!=null || token!=undefined){
        return true;
      }
      return false;
  }


}
