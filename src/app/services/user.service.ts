import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static userLogin: boolean = false;

  constructor() { }

  public static authorized():void{
    this.userLogin = true;
  }

  public static getStatusUser():boolean{
    return this.userLogin;
  }
}
