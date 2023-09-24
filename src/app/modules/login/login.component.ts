import { Component, ElementRef, OnInit } from '@angular/core';
import { HtmlUtils } from '../../utils/html-utils'
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

public position: string;

constructor(
  private htmlUtils: HtmlUtils,
  private elementRef: ElementRef,
  private router: Router,
  private activedRoute: ActivatedRoute
){

}

ngOnInit(): void {

}

// public testando():void{
//   let alert: HTMLDivElement = this.elementRef.nativeElement.querySelector("#teste");
//   this.position = `${this.htmlUtils.halfScreenUser()-((alert.offsetWidth*50)/100)}px`
//   console.log(this.htmlUtils.halfScreenUser()-alert.offsetWidth);

// }

public intoSystem():void{
  console.log(this.activedRoute);
  this.router.navigate(["home"], {relativeTo: this.activedRoute});
}

public loginAccepted():void{
    UserService.authorized();
}



}
