import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class HtmlUtils{

  constructor(){

  }

public fullScreenUser():void{

}

public halfScreenUser():number{
  let largura: number = window.innerWidth;
  return (largura*50)/100;
}

}
